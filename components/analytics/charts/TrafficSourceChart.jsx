import React from "react";

import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import TrafficSourceLabel from "../labels/TrafficSourceLabel";
import { TrafficToolTip } from "../tooltip/TrafficToolTip";

const data = [
  {
    name: "External Traffic Source",
    uv: 1100,
  },
  {
    name: "Hashtag Pages",
    uv: 500,
  },
  {
    name: "Notifications",
    uv: 2200,
  },
  {
    name: "Direct or Unknown",
    uv: 500,
  },
  {
    name: "Youtube search",
    uv: 4000,
  },
  {
    name: "End screens",
    uv: 6780,
  },
  {
    name: "YouTube Suggested",
    uv: 5890,
  },
  {
    name: "Shorts Feed",
    uv: 3390,
  },
];

export default function TrafficSourceChart() {
  return (
    <div className="h-96 flex flex-col gap-5 rounded-2xl border bg-card text-card-foreground shadow-sm pt-6 w-2/6">
      <div className="text-sm font-semibold px-6 flex gap-2 items-center">
        Traffic Source
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          layout="vertical"
          width={500}
          height={500}
          data={data}
          margin={{
            top: 0,
            right: 25,
            bottom: 0,
            left: 25,
          }}
        >
          <defs>
            <linearGradient id="traffic" x1="1" y1="0" x2="0" y2="0">
              <stop offset="100%" stopColor="#0d766f" stopOpacity={1} />
              <stop offset="100%" stopColor="#0d766f" stopOpacity={0} />

              {/* green-#166d48
              blue - #0047AB
              
              */}
            </linearGradient>
          </defs>
          <XAxis hide type="number" />
          <YAxis hide dataKey="name" type="category" />
          <Tooltip cursor={false} content={<TrafficToolTip />} />
          <Bar
            dataKey="uv"
            fill="url(#traffic)"
            radius={[6, 6, 6, 6]}
            label={<TrafficSourceLabel />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
