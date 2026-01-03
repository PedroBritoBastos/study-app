import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";

// GET /api/subjects
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
      { error: "Erro ao buscar subjects" },
      { status: 500 }
    );
  }
}

// POST /api/subjects
export async function POST(request: Request) {
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
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao criar subject" },
      { status: 500 }
    );
  }
}
