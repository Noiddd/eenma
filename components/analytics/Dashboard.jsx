"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import { getStats } from "@/lib/functions/getStats";
import SubscribersChart from "./charts/SubscribersChart";
import ViewsChart from "./charts/ViewsChart";
import WatchTimeChart from "./charts/WatchTimeChart";
import ImpressionChart from "./charts/ImpressionChart";
import RevenueChart from "./charts/RevenueChart";
import TrafficSourceChart from "./charts/TrafficSourceChart";
import ContentChart from "./charts/ContentChart";
import AnalyticsHeader from "./AnalyticsHeader";

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

  if (
    session &&
    session.expires_in &&
    window.localStorage.getItem("expires_in") == null
  ) {
    window.localStorage.setItem(
      "expires_in",
      Date.now() + Number(session.expires_in) * 1000
    );
  }

  console.log("SESSION DATA");
  console.log(session);
  // console.log(Date.now() + Number(session.expires_in) * 1000);
  // console.log(Number(session.expires_at));

  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ["analytics"],
    queryFn: () =>
      getStats({ token: window.localStorage.getItem("oauth_provider_token") }),
  });

  console.log("fetch data");
  console.log(data);

  return (
    <div className="px-72 pt-24">
      <div>
        <AnalyticsHeader />
      </div>

      <div className="flex gap-3 justify-center">
        <SubscribersChart />
        <ViewsChart />
        <WatchTimeChart />
        <ImpressionChart />
      </div>

      <div className="mt-[12px] flex gap-3">
        <RevenueChart />
        <TrafficSourceChart />
      </div>

      <div className="mt-[12px] flex gap-3">
        <ContentChart />
      </div>
    </div>
  );
}
