import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/libs/prisma";
import bcrypt from "bcrypt";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) { // authorize hace el login de por sí, funcionamiento normal.
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Datos incompletos");
                }

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                if (!user || !user.password) {
                    throw new Error("Credenciales incorrectas");
                }

                const isValid = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if (!isValid) {
                    throw new Error("Credenciales incorrectas");
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                };
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) { //agrega el id del usuario en el token ya creado
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) { // agrega el id del usuario en la session ya creada para usar en la app
            if (session.user) {
                session.user.id = token.id;
            }
            return session;
        },
    },

    session: {
        strategy: "jwt",
    },

    pages: {
        signIn: "/login",
    },

    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };