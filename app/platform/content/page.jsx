"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export default function Content() {
  const test = async () => {
    const refreshToken = window.localStorage.getItem(
      "oauth_provider_refresh_token"
    );

    console.log("REFRESH TOKEN");
    console.log(refreshToken);

    const res = await fetch(`${location.origin}/api/youtube/postRefreshToken`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(refreshToken),
    }).then((res) => res.json());

    console.log("token");
    console.log(res);

    if (res) {
      window.localStorage.removeItem("oauth_provider_token");
      window.localStorage.setItem("oauth_provider_token", res.access_token);
    }
  };
  return (
    <div>
      <Button onClick={test}>Refresh token</Button>
    </div>
  );
}
