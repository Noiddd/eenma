"use client";

import React from "react";
import { Button } from "../ui/button";
import SupabaseBrowser from "@/lib/supabase/SupabaseBrowser";

export default function SetUpGoogle() {
  const supabase = SupabaseBrowser();

  const onSetUp = async (provider) => {
    setIsLoading(true);

    if (provider == "google") {
      const { data, error } = supabase.auth.signInWithOAuth({
        provider,
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
          redirectTo: location.origin + "/auth/callback?next=/analytics",
        },
      });

      console.log("login data");
      console.log(data);
      console.log(error);

      setIsLoading(false);
    }

    if (provider == "email") {
      if (email == "") {
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: true,
          emailRedirectTo: location.origin + "/auth/callback?next=/analytics",
        },
      });

      console.log(data);
      console.log(error);

      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={onSetUp}>Start Set Up</Button>
    </div>
  );
}
