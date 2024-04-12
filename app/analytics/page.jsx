import useUserSession from "@/hooks/useUserSession";
import React from "react";
import { redirect } from "next/navigation";

export default async function Analytics() {
  const { data } = await useUserSession();

  if (!data.user) {
    return redirect("/");
  }
  return <div>Analytics</div>;
}
