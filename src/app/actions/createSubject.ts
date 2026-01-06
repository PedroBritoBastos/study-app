"use server";

import { revalidatePath } from "next/cache";

type CreateSubjectData = {
  title: string;
  content: string;
};

export async function createSubject({ title, content }: CreateSubjectData) {
  if (!title || !content) {
    throw new Error("Dados inválidos");
  }

  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/subjects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });

  // revalida a página onde os Subjects aparecem
  revalidatePath("/");
}
