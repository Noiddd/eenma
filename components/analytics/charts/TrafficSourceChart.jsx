import React from "react";

import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  CartesianGrid,
} from "recharts";
const data = [
  {
    name: "Channel pages",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Browse features",
    uv: 3450,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Youtube search",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "End screens",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "YouTube Suggested",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Shorts Feed",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

export default function TrafficSourceChart() {
  return (
    <Card className="h-96 flex flex-col gap-5">
      <div className="text-sm font-semibold px-10">Traffic Source</div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 14,
            right: 40,
            left: 40,
            bottom: 0,
          }}
          barSize={30}
          layout="vertical"
        >
          <XAxis hide axisLine={false} type="number" />
          <Tooltip cursor={false} />
          <Bar
            dataKey="uv"
            fill="#F5F5F5"
            radius={[6, 6, 6, 6]}
            label={{
              position: "insideLeft",
              fill: "#7F7F7F",
              dataKey: "name",
              fontSize: "13",
              fontWeight: "",
              fontStyle: "",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
