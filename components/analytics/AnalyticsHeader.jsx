import React from "react";
import { ChevronDown } from "lucide-react";

export default function AnalyticsHeader() {
  return (
    <div className="flex gap-2 items-center mb-3">
      <div className="font-semibold text-lg">Analytics</div>
      <div className="bg-[#232323] px-4 py-2 rounded-md text-xs flex gap-2 items-center">
        Last 7 days
        <ChevronDown className="w-3.5 h-3.5" />
      </div>
    </div>
  );
}
