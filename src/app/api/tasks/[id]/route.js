import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"

export async function GET(request, { params }) {
    try {
        const session = await getServerSession(authOptions)

        if (!session) {
            return NextResponse.json(
                { message: "No autorizado" },
                { status: 401 }
            )
        }

        const { id } = params

        const task = await prisma.task.findFirst({
            where: {
                id: Number(id),
                userId: session.user.id,
            },
        })

        return NextResponse.json({ task }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { message: "Error al obtener la tarea" },
            { status: 500 }
        )
    }
}

export async function DELETE(request, { params }) {
    try {
        const session = await getServerSession(authOptions)

        if (!session) {
            return NextResponse.json(
                { message: "No autorizado" },
                { status: 401 }
            )
        }

        const { id } = params

        const task = await prisma.task.deleteMany({
            where: {
                id: Number(id),
                userId: session.user.id,
            },
        })

        return NextResponse.json({ task }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { message: "Error al eliminar la tarea" },
            { status: 500 }
        )
    }
}

export async function PATCH(request, { params }) {
    try {
        const session = await getServerSession(authOptions)

        if (!session) {
            return NextResponse.json(
                { message: "No autorizado" },
                { status: 401 }
            )
        }

        const { id } = params
        const data = await request.json()

        const task = await prisma.task.updateMany({
            where: {
                id: Number(id),
                userId: session.user.id,
            },
            data,
        })

        return NextResponse.json({ task }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { message: "Error al editar la tarea" },
            { status: 500 }
        )
    }
}