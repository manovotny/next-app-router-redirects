import { NextResponse } from "next/server";

export function middleware() {
  return NextResponse.redirect(new URL("https://nextjs.org"));
}

export const config = {
  matcher: "/middleware-redirect",
};
