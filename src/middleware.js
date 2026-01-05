import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;

export function middleware(request) {
  const token = request.cookies.get("token")?.value;

  const protectedPaths = ["/new", "/tasks"];

  const { pathname } = request.nextUrl;

  const isProtected = protectedPaths.some(path =>
    pathname.startsWith(path)
  );

  if (!isProtected) return NextResponse.next(); //Si la ruta NO es una ruta protegida, se la deja pasar sin hacer nada

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    jwt.verify(token, JWT_SECRET);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/tasks/:path*", "/new/:path*"],
};
