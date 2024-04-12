import SetUpGoogle from "@/components/setup/SetUpGoogle";
import React from "react";

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
