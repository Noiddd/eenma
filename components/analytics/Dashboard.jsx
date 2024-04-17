"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import { Button } from "../ui/button";
import SupabaseBrowser from "@/lib/supabase/SupabaseBrowser";
import { getStats } from "@/lib/functions/getStats";

export default function Dashboard({ session }) {
  if (
    session &&
    session.provider_token &&
    window.localStorage.getItem("oauth_provider_token") == null
  ) {
    window.localStorage.setItem("oauth_provider_token", session.provider_token);
  }

  if (
    session &&
    session.provider_refresh_token &&
    window.localStorage.getItem("oauth_provider_refresh_token") == null
  ) {
    window.localStorage.setItem(
      "oauth_provider_refresh_token",
      session.provider_refresh_token
    );
  }

  console.log("SESSION DATA");
  console.log(session);
  const supabase = SupabaseBrowser();

  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ["analytics"],
    queryFn: () =>
      getStats({ token: window.localStorage.getItem("oauth_provider_token") }),
  });

  console.log("fetch data");
  console.log(data);

  const test = async () => {
    const refreshToken = window.localStorage.getItem(
      "oauth_provider_refresh_token"
    );

    console.log("REFRESH TOKEN");
    console.log(refreshToken);

    const { data, error } = await supabase.auth.refreshSession();
    const { session, user } = data;

    if (session) {
      window.localStorage.removeItem("oauth_provider_token");
      window.localStorage.removeItem("oauth_provider_refresh_token");

      window.localStorage.setItem(
        "oauth_provider_refresh_token",
        session.refresh_token
      );

      window.localStorage.setItem("oauth_provider_token", session.access_token);
    }

    console.log("NEW SESSION");
    console.log(session);
    console.log(user);
  };

  return (
    <div className="ml-96">
      <Button onClick={test}>Refresh token</Button>
    </div>
  );
}
