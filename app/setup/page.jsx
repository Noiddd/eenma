import SetUpGoogle from "@/components/setup/SetUpGoogle";
import useUserSession from "@/hooks/useUser";
import React from "react";
import { redirect } from "next/navigation";

export default async function SetUp() {
  const { data } = await useUserSession();

  if (!data.user) {
    return redirect("/");
  }

  return (
    <div>
      <SetUpGoogle />
    </div>
  );
}
