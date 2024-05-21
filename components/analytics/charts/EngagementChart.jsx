import { Card, CardContent } from "@/components/ui/card";

import { TrendingDown, TrendingUp } from "lucide-react";
import { Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { EngagementToolTip } from "../tooltip/EngagementToolTip";

const data = [
  {
    name: "Page A",
    likes: 9000,
    dislikes: 2400,
  },
  {
    name: "Page B",
    likes: 3000,
    dislikes: 1398,
  },
  {
    name: "Page C",
    likes: 2000,
    dislikes: 8800,
  },
  {
    name: "Page D",
    likes: 2780,
    dislikes: 3908,
  },
  {
    name: "Page E",
    likes: 1890,
    dislikes: 4800,
  },
  {
    name: "Page F",
    likes: 2390,
    dislikes: 3800,
  },
  {
    name: "Page G",
    likes: 3490,
    dislikes: 4300,
  },
];

export default function EngagementChart() {
  return (
    <Card className="h-2/3 flex flex-col justify-between py-6">
      <div className="flex-col gap-10 px-6">
        <div className="text-xs font-semibold flex gap-2 items-center">
          Engagement
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
              bottom: 0,
            }}
          >
            <Tooltip cursor={false} content={<EngagementToolTip />} />
            <Area
              type="monotone"
              dataKey="likes"
              stroke="#32de84"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#green)"
            />
            <Area
              type="monotone"
              dataKey="dislikes"
              stroke="#D2122E"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#red)"
            />

            <defs>
              <linearGradient id="green" x1="0" y1="0" x2="0" y2="0">
                <stop offset="90%" stopColor="#32de84" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#32de84" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="red" x1="0" y1="0" x2="0" y2="1">
                <stop offset="1%" stopColor="#D2122E" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#D2122E" stopOpacity={0} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>

      <div className="flex justify-center gap-20 px-6">
        <div className="flex flex-col">
          <div className="text-xs font-semibold flex items-center gap-2">
            <div className="bg-[#4FFFB0] rounded w-3 h-3"></div>
            Likes
          </div>
          <div className="text-2xl font-bold flex items-center gap-2">
            162,222
            <div className="flex items-center gap-1 font-bold rounded-md text-xs text-red-600">
              <TrendingDown className="w-3 h-3" strokeWidth={3} />
              3%
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-xs font-semibold flex items-center gap-2">
            <div className="bg-[#BA0021] rounded w-3 h-3"></div>
            DisLikes
          </div>
          <div className="text-2xl font-bold flex items-center gap-2">
            162,222
            <div className="flex items-center gap-1 font-bold rounded-md text-xs text-green-600">
              <TrendingUp className="w-3 h-3" strokeWidth={3} />
              3%
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
