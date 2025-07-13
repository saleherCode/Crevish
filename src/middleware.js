import { NextResponse , NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import toast from "react-hot-toast";


export function middleware(request){
    const path = request.nextUrl.pathname;

    const isPathPublic = path === '/login' || path === '/signup';

    const token = request.cookies.get('token')?.value || '';

    if(isPathPublic && token){
        return NextResponse.redirect(new URL('/meals/share', request.nextUrl));
    }

    if(!isPathPublic && !token){
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
}




export const config = {
    matcher: [
        '/profile',
        '/login',
        '/signup',
        '/meals/share'
    ]
}


// Function to check if the user is logged in based on the JWT cookie.
export function getUserFromToken(token){
    try {
        const decode = jwt.verify(token, process.env.TOKEN_SECRET);
        return decode;
    } catch (error) {
        console.log(error);
        return null;
    }
}