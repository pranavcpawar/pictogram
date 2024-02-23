import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // check if path is public path or not
  const isPublic = ["/login", "/signup"].includes(request.nextUrl.pathname);
  
  // get auth token from cookies
  const token = request.cookies.get("token")?.value || "";

  // if not public path and no token, redirect to login
  if(!isPublic && !token){
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // if public path and token, redirect to home
  if(isPublic && token){
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
  ]
}