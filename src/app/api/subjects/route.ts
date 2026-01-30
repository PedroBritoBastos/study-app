import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../prisma/prisma";

// api/subjects get
export async function GET() {
  try {
    const subjects = await prisma.subject.findMany({
      orderBy: {
        currentDate: "desc",
      },
    });

    return NextResponse.json(subjects);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar conteúdos" },
      { status: 500 },
    );
  }
}

// api/subjects post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, content } = body;

    const subject = await prisma.subject.create({
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(subject, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Erro ao criar o conteúdo" },
      { status: 500 },
    );
  }
}
