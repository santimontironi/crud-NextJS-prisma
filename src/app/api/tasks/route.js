import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json(
        { message: "No autorizado" },
        { status: 401 }
      )
    }

    const tasks = await prisma.task.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json({ tasks }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Error al obtener las tareas" },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json(
        { message: "No autorizado" },
        { status: 401 }
      )
    }

    const { title, description } = await request.json()

    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        userId: session.user.id
      },
    })

    return NextResponse.json(newTask, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: "Error al crear la tarea" },
      { status: 500 }
    )
  }
}