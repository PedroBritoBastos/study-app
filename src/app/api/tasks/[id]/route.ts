import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../../prisma/prisma";
import { getUserFromToken } from "../../_helpers/getUserByToken";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const user = await getUserFromToken();

    if (!user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { id } = params;

    // Verificar se a task existe e pertence ao usuário
    const task = await prisma.task.findFirst({
      where: {
        id,
        goal: {
          userId: user.id,
        },
      },
    });

    if (!task) {
      return NextResponse.json(
        { error: "Task não encontrada ou não autorizada" },
        { status: 404 },
      );
    }

    await prisma.task.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Task deletada com sucesso" });
  } catch {
    return NextResponse.json(
      { error: "Erro ao deletar a task" },
      { status: 500 },
    );
  }
}
