import { NextResponse } from "next/server";
import { prisma } from "../../../../../../../prisma/prisma";
import { getUserFromToken } from "../../../../_helpers/getUserByToken";

// api/schedules/:scheduleId/scheduleTasks/:taskId delete
export async function DELETE(
  request: Request,
  { params }: { params: { scheduleId: string; scheduleTaskId: string } },
) {
  try {
    const { scheduleId, scheduleTaskId } = await params;
    const user = await getUserFromToken();

    // valida o usuário
    if (!user || !user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // procura a schedule no banco
    const schedule = await prisma.schedule.findFirst({
      where: {
        id: scheduleId,
        userId: user.id,
      },
    });

    // valida se a schedule existe e pertence ao usuário
    if (!schedule) {
      return NextResponse.json(
        { error: "Schedule não encontrado ou não pertence ao usuário" },
        { status: 404 },
      );
    }

    // procura a scheduleTask no banco
    const scheduleTask = await prisma.scheduleTask.findFirst({
      where: {
        id: scheduleTaskId,
        scheduleId: scheduleId,
      },
    });

    // valida se a scheduleTask existe e pertence à schedule
    if (!scheduleTask) {
      return NextResponse.json(
        { error: "ScheduleTask não encontrado ou não pertence ao schedule" },
        { status: 404 },
      );
    }

    // deleta a scheduleTask do banco
    await prisma.scheduleTask.delete({
      where: {
        id: scheduleTaskId,
      },
    });

    return NextResponse.json(
      { message: "ScheduleTask removido com sucesso" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao deletar schedule task", msg: error },
      { status: 500 },
    );
  }
}
