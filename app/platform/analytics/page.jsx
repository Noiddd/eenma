import useUser from "@/hooks/useUser";
import React from "react";
import { redirect } from "next/navigation";
import useUserSession from "@/hooks/useUserSession";
import Dashboard from "@/components/analytics/Dashboard";

export default async function Analytics() {
  const { data: user } = await useUser();
  const { data: session } = await useUserSession();

  console.log("USER");
  console.log(user);
  console.log("session");
  console.log(session);

  if (!user.user) {
    return redirect("/");
  }

  return (
    <div>
      <Dashboard session={session.session} />
    </div>
  );
}
