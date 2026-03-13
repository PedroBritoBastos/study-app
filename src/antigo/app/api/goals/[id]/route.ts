import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../../../prisma/prisma";
import { getUserFromToken } from "../../_helpers/getUserByToken";

// api/goals/:id delete
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const user = await getUserFromToken();

    if (!user || !user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const goal = await prisma.goal.findFirst({
      where: {
        id: id,
        userId: user.id,
      },
    });

    if (!goal) {
      return NextResponse.json(
        { error: "Goal não encontrado ou não pertence ao usuário" },
        { status: 404 },
      );
    }

    await prisma.goal.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(
      { message: "Goal removido com sucesso" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao deletar goal", msg: error },
      { status: 500 },
    );
  }
}
