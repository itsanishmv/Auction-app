import { SignJWT } from "jose";

export async function generateJWT(payload) {
  const iat = Math.floor(Date.now() / 1000);
  // const exp = iat + 60 * 60; optional
  return new SignJWT({ payload })
    .setProtectedHeader({ alg: "HS256", type: "JWT" })
    .setIssuedAt(iat)
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));
}
