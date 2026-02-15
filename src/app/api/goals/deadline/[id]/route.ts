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
