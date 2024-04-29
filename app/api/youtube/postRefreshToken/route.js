import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const refreshToken = await req.json();

  const response = await fetch("https://oauth2.googleapis.com/token", {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.AUTH_GOOGLE_ID,
      client_secret: process.env.AUTH_GOOGLE_SECRET,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    method: "POST",
  }).then((res) => res.json());

  return NextResponse.json(response);
}
