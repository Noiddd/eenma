import React from "react";
import { ThumbsUp, ThumbsDown, MessageSquare, Forward } from "lucide-react";

export const EngagementToolTip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="border bg-background rounded-lg py-2 px-4 flex flex-col gap-2">
        <div className="text-sm">{`${payload[0].payload.name}`}</div>

        <div className="flex items-center gap-2">
          <ThumbsUp className="h-4 w-4" />
          <p className="text-xs">{`${payload[0].payload.likes}`}</p>
        </div>

        <div className="flex items-center gap-2">
          <ThumbsDown className="h-4 w-4" />
          <p className="text-xs">{`${payload[0].payload.dislikes}`}</p>
        </div>
      </div>
    );
  }

  return null;
};
