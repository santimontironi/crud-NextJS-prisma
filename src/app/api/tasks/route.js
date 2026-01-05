import { NextResponse } from "next/server";
import {prisma} from "@/libs/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;

export async function GET() {
  try {

    const token = request.cookies.get("token")?.value;

    if(!token){
      return NextResponse.json({ message: "No autorizado" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const userId = decoded.userId;

    const tasks = await prisma.task.findMany({ where: { userId }, orderBy: { createdAt: 'desc' }});
    
    return NextResponse.json({ tasks }, { status: 200 });
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