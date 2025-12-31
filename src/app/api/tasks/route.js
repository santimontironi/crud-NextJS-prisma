import { NextResponse } from "next/server";
import {prisma} from "@/libs/prisma";

export async function GET() {
  try {
    const tasks = await prisma.task.findMany();
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error al obtener las tareas", error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try{
    const { title, description } = await request.json();

    const newTask = await prisma.task.create({
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(newTask, { status: 201 });
  }
  catch(error){
    return NextResponse.json(
      { message: "Error al crear la tarea", error: error.message },
      { status: 500 }
    );
  }
}