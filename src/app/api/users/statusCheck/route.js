import {cookies} from "next/headers";
import { getUserFromToken } from "@/src/middleware";
import { NextResponse } from "next/server";


export async function GET() {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    const user = await getUserFromToken(token);
    return NextResponse.json({loggedIn : !!user});
}