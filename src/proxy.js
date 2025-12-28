import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const privateRoute=["/my_bookings","/booking"];
const authRoute=["/login","/signup"];

export async function proxy(req){
    const token =await getToken({req,secret:process.env.NEXTAUTH_SECRET});

    const isAuthenticated=Boolean(token);
    const reqPath=req.nextUrl.pathname;
    const isPrivateReq=privateRoute.some((route)=> req.nextUrl.pathname.startsWith(route));
    const isAuthReq=authRoute.some((route)=> req.nextUrl.pathname.startsWith(route));

    if(!isAuthenticated && isPrivateReq)
        return NextResponse.redirect(new URL(`/login?callbackUrl=${reqPath}`,req.url));

    if(isAuthenticated && isAuthReq)
        return NextResponse.redirect(new URL("/",req.url));

    return NextResponse.next();
};


export const config={
    matcher:["/my_bookings/:path*","/booking/:path*","/login","/signup"],
}