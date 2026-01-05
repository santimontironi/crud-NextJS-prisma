import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { getUserFromToken } from "@/libs/auth";

export async function GET(request) {
  const user = getUserFromToken(request);

  if (!user) {
    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  }

  const tasks = await prisma.task.findMany({
    where: { userId: user.userId },
  });

  return NextResponse.json({ tasks });
}

export async function POST(request) {
  try {
    const { title, description } = await request.json();

    const newTask = await prisma.task.create({
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(newTask, { status: 201 });
  }
  catch (error) {
    return NextResponse.json(
      { message: "Error al crear la tarea", error: error.message },
      { status: 500 }
    );
  }
}