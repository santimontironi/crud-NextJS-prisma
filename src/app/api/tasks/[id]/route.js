import { NextResponse } from "next/server";
import {prisma} from "@/libs/prisma";

export async function GET(request, { params }) {
    try{
        const {id} = await params;

        const task = await prisma.task.findUnique({
            where: { id: Number(id) },
        });

        return NextResponse.json({task}, {status:200});
    }
    catch(error){
        return NextResponse.json({message:'Error al obtener la tarea', error: error.message}, {status:500});
    }
}

export async function DELETE(request, { params }) {
    try{
        const {id} = await params;

        return NextResponse.json({message: `Tarea con ID: ${id}`}, {status:200});
    }
    catch(error){
        return NextResponse.json({message:'Error al eliminar la tarea', error: error.message}, {status:500});
    }
}

export async function PATCH(request, { params }) {
    try{
        const {id} = await params;

        return NextResponse.json({message: `Tarea con ID: ${id}`}, {status:200});
    }
    catch(error){
        return NextResponse.json({message:'Error al editar la tarea', error: error.message}, {status:500});
    }
}