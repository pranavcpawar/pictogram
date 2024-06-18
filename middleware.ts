import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest){

  const isPublic = ["/login", "/register"].includes(request.nextUrl.pathname);

  const auth = cookies().get("session")?.value || "";

  if(!isPublic && !auth){
    return NextResponse.redirect(new URL("/login", request.url));
  };

  if(isPublic && auth){
    return NextResponse.redirect(new URL("/", request.url));
  };

};

export const config = {
  matcher: ["/", "/login", "/register"],
};
