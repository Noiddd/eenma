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
import TrafficSourceLabel from "../labels/TrafficSourceLabel";
import { TrafficToolTip } from "../tooltip/TrafficToolTip";
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
    <Card className="h-full flex flex-col gap-3">
      <div className="text-xs font-semibold px-6">Traffic Source</div>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 25,
            bottom: 0,
            left: 25,
          }}
          barSize={30}
          layout="vertical"
        >
          <XAxis hide type="number" />
          <YAxis hide dataKey="name" type="category" />
          <Tooltip cursor={false} content={<TrafficToolTip />} />
          <Bar
            dataKey="uv"
            fill="#F5F5F5"
            radius={[6, 6, 6, 6]}
            // label={{
            //   position: "insideLeft",
            //   fill: "#7F7F7F",
            //   dataKey: "name",
            //   fontSize: "13",
            //   fontWeight: "",
            //   fontStyle: "",
            // }}
            label={<TrafficSourceLabel />}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
