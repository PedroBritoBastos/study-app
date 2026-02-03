import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../prisma/prisma";
import { getUserFromToken } from "../_helpers/getUserByToken";

// api/subjects get
export async function GET() {
  try {
    const user = await getUserFromToken();

    if (!user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const subjects = await prisma.subject.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        currentDate: "desc",
      },
    });

    return NextResponse.json(subjects);
  } catch {
    return NextResponse.json(
      { error: "Erro ao buscar conteúdos" },
      { status: 500 },
    );
  }
}

// api/subjects post
export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromToken();

    if (!user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const body = await request.json();
    const { title, content } = body;

    const subject = await prisma.subject.create({
      data: {
        title,
        content,
        userId: user.id,
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
