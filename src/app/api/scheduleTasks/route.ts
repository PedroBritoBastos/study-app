import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../prisma/prisma";
import { getUserFromToken } from "../_helpers/getUserByToken";

// api/scheduleTasks post
export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromToken();

    if (!user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const body = await request.json();
    const { title, scheduleId, executionTime } = body;

    if (!scheduleId) {
      return NextResponse.json(
        { error: "Essa schedule não existe." },
        { status: 400 },
      );
    }

    // Verificar se a schedule existe e pertence ao usuário
    const schedule = await prisma.schedule.findFirst({
      where: {
        id: scheduleId,
        userId: user.id,
      },
    });

    if (!schedule) {
      return NextResponse.json(
        { error: "Schedule não encontrado ou não autorizado" },
        { status: 404 },
      );
    }

    const scheduleTask = await prisma.scheduleTask.create({
      data: {
        title,
        scheduleId,
        isChecked: false,
        executionTime: executionTime ? new Date(executionTime) : null,
      },
    });

    return NextResponse.json(scheduleTask, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Erro ao criar a schedule task" },
      { status: 500 },
    );
  }
}
