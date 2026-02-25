import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../../prisma/prisma";
import { getUserFromToken } from "../../_helpers/getUserByToken";

// api/schedules/:id get
export async function GET(
  request: Request,
  { params }: { params: { scheduleId: string } },
) {
  try {
    const { scheduleId } = await params;
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

    return NextResponse.json(schedule, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar schedule", msg: error },
      { status: 500 },
    );
  }
}

// api/schedules/:id delete
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = await params;
    const user = await getUserFromToken();

    // valida o usuário
    if (!user || !user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // procura a schedule no banco
    const schedule = await prisma.schedule.findFirst({
      where: {
        id: id,
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

    // deleta a schedule do banco
    await prisma.schedule.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(
      { message: "Schedule removido com sucesso" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao deletar schedule", msg: error },
      { status: 500 },
    );
  }
}
