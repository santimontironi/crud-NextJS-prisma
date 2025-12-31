import { NextResponse } from "next/server";
import {prisma} from "@/libs/prisma";

export async function GET() {
  try {
    const tasks = await prisma.task.findMany();
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error retrieving tasks", error: error.message },
      { status: 500 }
    );
  }
}