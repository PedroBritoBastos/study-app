import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma";

import { SubjectGetById } from "@/src/types/Params";
import { SubjectId } from "@/src/types/Params";

/**
 * GET /api/subjects/[id]
 * Busca um subject pelo id
 */
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
        { error: "Subject não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(subject);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar subject" },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/subjects/[id]
 * Atualiza um subject
 */
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

/**
 * DELETE /api/subjects/[id]
 * Remove um subject
 */
export async function DELETE(request: Request, { params }: SubjectGetById) {
  try {
    await prisma.subject.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(
      { message: "Subject removido com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao deletar subject" },
      { status: 500 }
    );
  }
}
