import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export const POST = async (request) => {
    try{
        const { email, password } = await request.json();

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json({ message: "El usuario ya existe" },{ status: 400 });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: { email, password: passwordHash },
        })

        return NextResponse.json(user, { status: 201 });
    }
    catch(error){
        return NextResponse.json({ message: 'Error al crear el usuario', error: error.message }, { status: 500 });
    }
}

