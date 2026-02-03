import { NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    await prisma.user.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(
      { message: "Usuário removido com sucesso" },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Erro ao deletar usuário" },
      { status: 500 },
    );
  }
}
