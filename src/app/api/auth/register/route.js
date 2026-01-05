import {prisma} from "@/libs/prisma";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export const POST = async (request) => {
    try{
        const { email, password, name, surname } = await request.json();

        console.log(prisma)

        console.log(email, password, name, surname);

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json({ message: "El usuario ya existe" },{ status: 400 });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: { email, password: passwordHash, name, surname },
        })

        const {password: _, ...userWithoutPassword} = user;

        return NextResponse.json({user: userWithoutPassword}, { status: 201 });
    }
    catch(error){
        return NextResponse.json({ message: 'Error al crear el usuario', error: error.message }, { status: 500 });
    }
}

