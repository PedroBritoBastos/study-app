import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { prisma } from "../../../../../prisma/prisma";

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

    // buscando usuario no banco
    const user = await prisma.user.findUnique({
      where: { username },
      select: {
        id: true,
        username: true,
        password: true,
      },
    });

    // validando se o usuario existe
    if (!user) {
      return NextResponse.json(
        { error: "Usuário ou senha inválidos." },
        { status: 401 },
      );
    }

    // comparando a senha com a hash do banco
    const isValidPassword = await bcrypt.compare(password, user.password);

    // validando a senha
    if (!isValidPassword) {
      return NextResponse.json({ error: "Senha inválida." }, { status: 401 });
    }

    // gerando um token
    const secret = process.env.JWT_SECRET;
    console.log("tem secret: ", secret);

    if (!secret) {
      throw new Error("Não possui JWT_SECRET");
    }

    const token = jwt.sign({ id: user.id }, secret, {
      expiresIn: "1d",
    });

    // criando resposta com cookie HttpOnly
    const response = NextResponse.json(
      {
        user: {
          id: user.id,
          username: user.username,
          token: token,
        },
      },
      { status: 200 },
    );

    // adicionando o token no cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
