import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../../../prisma/prisma";
import { getUserFromToken } from "../../../_helpers/getUserByToken";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const user = await getUserFromToken();

    if (!user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { id } = await params;

    // Verificar se a task existe
    const task = await prisma.task.findFirst({
      where: {
        id,
      },
    });

    if (!task) {
      return NextResponse.json(
        { error: "Task não encontrada" },
        { status: 404 },
      );
    }

    return NextResponse.json({ isChecked: task.isChecked });
  } catch {
    return NextResponse.json(
      { error: "Erro ao buscar status da task" },
      { status: 500 },
    );
  }
}
