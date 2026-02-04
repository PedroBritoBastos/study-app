import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../../prisma/prisma";
import { getUserFromToken } from "../../_helpers/getUserByToken";

// api/subjects/:id get
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const subject = await prisma.subject.findUnique({
      where: {
        id: id,
      },
    });

    // validações
    if (!subject) {
      return NextResponse.json(
        { error: "Conteúdo não encontrado" },
        { status: 404 },
      );
    }

    return NextResponse.json(subject);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar conteúdo" },
      { status: 500 },
    );
  }
}

// api/subjects/:id put
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { title, content } = body;

    const subject = await prisma.subject.update({
      where: {
        id: id,
      },
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(subject);
  } catch {
    return NextResponse.json(
      { error: "Erro ao atualizar subject" },
      { status: 500 },
    );
  }
}

// api/subjects/:id delete
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const user = await getUserFromToken();

    // valida o usuário
    if (!user || !user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // procura a subject no banco
    const subject = await prisma.subject.findUnique({
      where: {
        id: id,
      },
    });

    // valida se a subject existe
    if (!subject) {
      return NextResponse.json(
        { error: "Conteúdo não encontrado ou não pertence ao usuário" },
        { status: 404 },
      );
    }

    // deleta a subject do banco
    await prisma.subject.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(
      { message: "Conteúdo removido com sucesso" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao deletar conteúdo", msg: error },
      { status: 500 },
    );
  }
}
