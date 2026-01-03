import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export const POST = async (request) => {
    try {
        const { email, password } = await request.json();

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (!existingUser) {
            return NextResponse.json({ message: "Credenciales incorrectas" }, { status: 400 });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordValid) {
            return NextResponse.json({ message: "Credenciales incorrectas" }, { status: 400 });
        }

        const token = jwt.sign(
            { userId: existingUser.id },
            process.env.NEXT_PUBLIC_JWT_SECRET,
            { expiresIn: '7d' }
        );

        const cookieSerialized = serialize("token", token, {
            httpOnly: true,     
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"
        });

        const response = NextResponse.json(existingUser, { status: 200 });

        response.headers.set("Set-Cookie", cookieSerialized);
    }
    catch (error) {
        return NextResponse.json({ message: 'Error al crear el usuario', error: error.message }, { status: 500 });
    }
}