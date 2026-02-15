import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../prisma/prisma";
import { getUserFromToken } from "../_helpers/getUserByToken";

// api/goals get
export async function GET() {
  try {
    const user = await getUserFromToken();

    if (!user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const goals = await prisma.goal.findMany({
      where: {
        userId: user.id,
      },
      include: {
        tasks: true,
      },
    });

    return NextResponse.json(goals);
  } catch {
    return NextResponse.json(
      { error: "Erro ao buscar goals" },
      { status: 500 },
    );
  }
}

// api/goals post
export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromToken();

    if (!user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const body = await request.json();
    const { title, deadline } = body;

    const formatedDeadline = new Date(deadline);

    const goal = await prisma.goal.create({
      data: {
        title,
        userId: user.id,
        deadline: formatedDeadline,
      },
    });

    return NextResponse.json(goal, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Erro ao criar o goal" },
      { status: 500 },
    );
  }
}
