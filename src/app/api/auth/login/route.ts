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
        { error: "Username and password are required" },
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
        { error: "Invalid username or password" },
        { status: 401 },
      );
    }

    // comparando a senha com a hash do banco
    const isValidPassword = await bcrypt.compare(password, user.password);

    // validando a senha
    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 },
      );
    }

    // validando se existe secret
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not defined");
    }

    // gerando um token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // criando resposta com cookie HttpOnly
    const response = NextResponse.json(
      {
        user: {
          id: user.id,
          username: user.username,
        },
      },
      { status: 200 },
    );

    // setando o token no cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
