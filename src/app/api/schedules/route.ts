import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../prisma/prisma";
import { getUserFromToken } from "../_helpers/getUserByToken";

// api/schedules get
export async function GET() {
  try {
    const user = await getUserFromToken();

    if (!user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const schedules = await prisma.schedule.findMany({
      where: {
        userId: user.id,
      },
      include: {
        tasks: true,
      },
    });

    return NextResponse.json(schedules);
  } catch {
    return NextResponse.json(
      { error: "Erro ao buscar schedules" },
      { status: 500 },
    );
  }
}
