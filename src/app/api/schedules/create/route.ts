import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../../prisma/prisma";
import { getUserFromToken } from "../../_helpers/getUserByToken";

export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromToken();

    if (!user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const body = await request.json();
    const { title, scheduleDay, tasks } = body;

    const formatedScheduleDay = new Date(scheduleDay);

    const schedule = await prisma.schedule.create({
      data: {
        title,
        scheduleDay: formatedScheduleDay,
        userId: user.id,
        tasks:
          tasks && tasks.length > 0
            ? {
                create: tasks.map(
                  (task: { title: string; executionTime?: string }) => ({
                    title: task.title,
                    executionTime: task.executionTime
                      ? new Date(task.executionTime)
                      : null,
                  }),
                ),
              }
            : undefined,
      },
      include: {
        tasks: true,
      },
    });

    return NextResponse.json(schedule, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Erro ao criar o schedule" },
      { status: 500 },
    );
  }
}
