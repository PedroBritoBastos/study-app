import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../../prisma/prisma";
import { createPasswordHash } from "@/app/api/_helpers/createPasswordHash";

export async function POST(request: NextRequest) {
  try {
    // pegando dados da requisicao
    const body = await request.json();
    const { username, password } = body;

    // validando dados
    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 },
      );
    }

    // criando hash de senha
    const hashedPassword = await createPasswordHash(password);

    // criando usuario no banco
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        subjects: { create: [] },
      },
      select: {
        id: true,
        username: true,
      },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error && "code" in error && error.code === "P2002") {
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
