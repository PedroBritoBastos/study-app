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

interface DataTest {
  title: string;
  content: string;
}

// POST /api/subjects
export async function POST(data: DataTest) {
  try {
    const subject = await prisma.subject.create({
      data: {
        title: data.title,
        content: data.content,
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
