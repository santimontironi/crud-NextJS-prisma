import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export const POST = async (request) => {
    try{
        const { email, password } = await request.json();

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (!existingUser) {
            return NextResponse.json({ message: "Credenciales incorrectas" },{ status: 400 });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordValid) {
            return NextResponse.json({ message: "Credenciales incorrectas" },{ status: 400 });
        }

        return NextResponse.json(existingUser, { status: 200 });
    }
    catch(error){
        return NextResponse.json({ message: 'Error al crear el usuario', error: error.message }, { status: 500 });
    }
}