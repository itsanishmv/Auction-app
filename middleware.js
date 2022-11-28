import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req) {
  console.log(req.headers.get("authorization"));
  const authToken = req.headers?.get("authorization");
  const withoutBearer = authToken?.split(" ")[1];
  if (authToken && authToken.startsWith("Bearer")) {
    try {
      let { payload } = await jwtVerify(
        withoutBearer,
        new TextEncoder().encode(process.env.JWT_SECRET)
      );
      if (payload) {
        return new NextResponse(
          JSON.stringify({ message: "logged in jwt", status: 200 })
        );
      }
    } catch (error) {
      // enabled an experimental feature "modifying middleware response to the client " instead of using rewrite/redirect (will change according to our UI requirements)
      return new NextResponse(
        JSON.stringify({ message: "unauthorised", status: 404 })
      );
    }
  }
}
