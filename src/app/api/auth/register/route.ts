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
        { error: "Usuário e senha obrigatórios." },
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
  } catch (error) {
    return NextResponse.json(
      { error: "Este usuário já existe, tente outro." },
      { status: 400 },
    );
  }
}
