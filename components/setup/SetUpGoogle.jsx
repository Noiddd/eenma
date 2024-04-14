"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import SupabaseBrowser from "@/lib/supabase/SupabaseBrowser";

export default function SetUpGoogle() {
  const [isLoading, setIsLoading] = useState(false);
  const supabase = SupabaseBrowser();

  supabase.auth.onAuthStateChange((event, session) => {
    console.log("OAUTH SESSION");
    console.log(session);
    if (session && session.provider_token) {
      window.localStorage.setItem(
        "oauth_provider_token",
        session.provider_token
      );
    }

    if (session && session.provider_refresh_token) {
      window.localStorage.setItem(
        "oauth_provider_refresh_token",
        session.provider_refresh_token
      );
    }

    if (event === "SIGNED_OUT") {
      window.localStorage.removeItem("oauth_provider_token");
      window.localStorage.removeItem("oauth_provider_refresh_token");
    }
  });

  const onSetUp = async () => {
    setIsLoading(true);

    const { data, error } = supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
          scope: [
            "openid",
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/yt-analytics.readonly",
            "https://www.googleapis.com/auth/youtube",
            "https://www.googleapis.com/auth/youtube.readonly",
            "https://www.googleapis.com/auth/youtubepartner",
            "https://www.googleapis.com/auth/yt-analytics-monetary.readonly",
          ].join(" "),
        },
        redirectTo: location.origin + "/auth/callback?next=/platform/analytics",
      },
    });

    console.log("login data");
    console.log(data);
    console.log(error);

    setIsLoading(false);
  };

  return (
    <div>
      <Button onClick={onSetUp}>Start Set Up</Button>
    </div>
  );
}
