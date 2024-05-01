import React from "react";
import { Eye } from "lucide-react";

export const ViewToolTip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="border bg-background rounded-lg py-2 px-4 flex flex-col gap-2">
        <div className="text-sm">{`${payload[0].payload.name}`}</div>

        <div className="flex items-center gap-2">
          <Eye className="h-4 w-4" />
          <p className="text-xs">{`${payload[0].value}`}</p>
        </div>
      </div>
    );
  }

  return null;
};
