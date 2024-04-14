"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import useUserSession from "@/hooks/useUserSession";

export default function Dashboard({ session }) {
  console.log(session.provider_token);
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ["analytics"],
    queryFn: () =>
      fetch(`https://youtubeanalytics.googleapis.com/v2`, {
        method: "GET",
        header: { Authorization: "Bearer " + session.provider_token },
      }).then((res) => res.json()),
  });

  return <div>{data}</div>;
}
