import { NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/prisma";
import { getUserFromToken } from "../../../_helpers/getUserByToken";

// api/goals/deadline/:id - GET
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

    // procura a goal no banco
    const goal = await prisma.goal.findFirst({
      where: {
        id: id,
        userId: user.id,
      },
      select: {
        deadline: true,
      },
    });

    // valida se a goal existe e pertence ao usuário
    if (!goal) {
      return NextResponse.json(
        { error: "Goal não encontrado ou não pertence ao usuário" },
        { status: 404 },
      );
    }

    return NextResponse.json({ deadline: goal.deadline }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar deadline", msg: error },
      { status: 500 },
    );
  }
}

// api/goals/deadline/:id - PUT
export async function PUT(
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

    // pega o novo deadline do body
    const body = await request.json();
    const { deadline } = body;

    // valida se o deadline foi passado
    if (!deadline) {
      return NextResponse.json(
        { error: "Deadline é obrigatório" },
        { status: 400 },
      );
    }

    // procura a goal no banco
    const goal = await prisma.goal.findFirst({
      where: {
        id: id,
        userId: user.id,
      },
    });

    // valida se a goal existe e pertence ao usuário
    if (!goal) {
      return NextResponse.json(
        { error: "Goal não encontrado ou não pertence ao usuário" },
        { status: 404 },
      );
    }

    // atualiza o deadline
    const updatedGoal = await prisma.goal.update({
      where: {
        id: id,
      },
      data: {
        deadline: new Date(deadline),
      },
    });

    return NextResponse.json(
      { deadline: updatedGoal.deadline },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao atualizar deadline", msg: error },
      { status: 500 },
    );
  }
}
