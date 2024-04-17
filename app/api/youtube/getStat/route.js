import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  const data = cookieStore.get();

  console.log("route data");
  console.log(data);
  return NextResponse.json(labels);
}
