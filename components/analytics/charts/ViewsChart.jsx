import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";

import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 2000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 1000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function ViewsChart() {
  return (
    <Card className="h-48 sm:h-40">
      <div className="flex-col gap-10 px-6">
        <div className="text-xs font-semibold">Views</div>
        <div className="flex-col gap-10 ">
          <div className="flex gap-3 mt-2 justify-start items-center">
            <div className="2xl:text-4xl text-3xl  font-semibold">233,212</div>
            <div className="flex items-center gap-1 font-bold rounded-md text-xs text-green-600">
              <TrendingUp className="w-3 h-3" strokeWidth={3} />
              29%
            </div>
          </div>
        </div>
      </div>

      <CardContent className="h-48 sm:h-40">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 90,
            }}
          >
            <Tooltip cursor={false} />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#32de84"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#green)"
            />
            <defs>
              <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
                <stop offset="1%" stopColor="#32de84" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#32de84" stopOpacity={0} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
