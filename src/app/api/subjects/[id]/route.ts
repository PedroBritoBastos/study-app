import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma";
import { SubjectGetById } from "@/src/types/Params";

// api/subjects/:id get
export async function GET(request: Request, { params }: SubjectGetById) {
  try {
    const subject = await prisma.subject.findUnique({
      where: {
        id: params.id,
      },
    });

    // validações
    if (!subject) {
      return NextResponse.json(
        { error: "Conteúdo não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(subject);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar conteúdo" },
      { status: 500 }
    );
  }
}

// api/subjects/:id put
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
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
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao atualizar subject" },
      { status: 500 }
    );
  }
}

// api/subjects/:id delete
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.subject.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(
      { message: "Conteúdo removido com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao deletar conteúdo" },
      { status: 500 }
    );
  }
}
