import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../../../prisma/prisma";
import { getUserFromToken } from "../../../_helpers/getUserByToken";

// api/schedules/:id get
export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = await params;
    const user = await getUserFromToken();

    // valida o usuário
    if (!user || !user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // procura a schedule no banco
    const schedule = await prisma.schedule.findFirst({
      where: {
        id: id,
        userId: user.id,
      },
    });

    // valida se a schedule existe e pertence ao usuário
    if (!schedule) {
      return NextResponse.json(
        { error: "Schedule não encontrado ou não pertence ao usuário" },
        { status: 404 },
      );
    }

    // busca as schedule tasks
    const scheduleTasks = await prisma.scheduleTask.findMany({
      where: {
        scheduleId: id,
      },
    });

    return NextResponse.json(scheduleTasks);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar schedule tasks", msg: error },
      { status: 500 },
    );
  }
}
