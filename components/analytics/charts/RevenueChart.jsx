import { Card, CardContent } from "@/components/ui/card";

import { TrendingUp } from "lucide-react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { SubscribersToolTip } from "../tooltip/SubscribersToolTip";

const data = [
  {
    name: "Apr 24, 2024",
    uv: 2146,
  },
  {
    name: "Apr 25, 2024",
    uv: 9000,
  },
  {
    name: "Apr 26, 2024",
    uv: 2000,
  },
  {
    name: "Apr 27, 2024",
    uv: 2780,
  },
  {
    name: "Apr 28, 2024",
    uv: 3890,
  },

  {
    name: "Yesterday",
    uv: 4290,
  },
  {
    name: "Today",
    uv: 5400,
  },
];

export default function RevenueChart() {
  return (
    <Card className="">
      <div className="flex-col gap-10 px-6">
        <div className="text-xs font-semibold flex gap-2 items-center">
          Revenue
        </div>
        <div className="flex-col gap-10 ">
          <div className="flex gap-3 mt-2 justify-start items-center">
            <div className="2xl:text-4xl text-3xl font-semibold">102,212</div>
            <div className="flex items-center gap-1 font-bold rounded-md text-xs text-green-600">
              <TrendingUp className="w-3 h-3" strokeWidth={3} />
              12%
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
            <Tooltip cursor={false} content={<SubscribersToolTip />} />
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
