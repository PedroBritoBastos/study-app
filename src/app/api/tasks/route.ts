import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../prisma/prisma";
import { getUserFromToken } from "../_helpers/getUserByToken";

// api/tasks post
export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromToken();

    if (!user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const body = await request.json();
    const { title, goalId } = body;

    if (!goalId) {
      return NextResponse.json(
        { error: "Essa meta não existe." },
        { status: 400 },
      );
    }

    // Verificar se o goal existe e pertence ao usuário
    const goal = await prisma.goal.findFirst({
      where: {
        id: goalId,
        userId: user.id,
      },
    });

    if (!goal) {
      return NextResponse.json(
        { error: "Goal não encontrado ou não autorizado" },
        { status: 404 },
      );
    }

    const task = await prisma.task.create({
      data: {
        title,
        goalId,
      },
    });

    return NextResponse.json(task, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Erro ao criar a task" },
      { status: 500 },
    );
  }
}

// api/tasks get
export async function GET(request: NextRequest) {
  try {
    const user = await getUserFromToken();

    if (!user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const goalId = request.nextUrl.searchParams.get("goalId");

    if (!goalId) {
      return NextResponse.json(
        { error: "Goal ID é obrigatório" },
        { status: 400 },
      );
    }

    // Verificar se o goal existe e pertence ao usuário
    const goal = await prisma.goal.findFirst({
      where: {
        id: goalId,
        userId: user.id,
      },
    });

    if (!goal) {
      return NextResponse.json(
        { error: "Goal não encontrado ou não autorizado" },
        { status: 404 },
      );
    }

    const tasks = await prisma.task.findMany({
      where: {
        goalId,
      },
    });

    return NextResponse.json(tasks);
  } catch {
    return NextResponse.json(
      { error: "Erro ao buscar as tasks" },
      { status: 500 },
    );
  }
}
