import { Card, CardContent } from "@/components/ui/card";

import { TrendingDown, TrendingUp } from "lucide-react";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart,
} from "recharts";
import { SubscribersToolTip } from "../tooltip/SubscribersToolTip";

const data = [
  {
    name: "Page A",
    likess: 4000,
    dislikes: 2400,
    comments: 2400,
    shares: 3200,
  },
  {
    name: "Page B",
    likess: 3000,
    dislikes: 1398,
    comments: 2210,
    shares: 2200,
  },
  {
    name: "Page C",
    likess: 2000,
    dislikes: 9800,
    comments: 2290,
    shares: 3200,
  },
  {
    name: "Page D",
    likess: 2780,
    dislikes: 3908,
    comments: 2000,
    shares: 3200,
  },
  {
    name: "Page E",
    likess: 1890,
    dislikes: 4800,
    comments: 2181,
    shares: 4000,
  },
  {
    name: "Page F",
    likess: 2390,
    dislikes: 3800,
    comments: 2500,
    shares: 3200,
  },
  {
    name: "Page G",
    likess: 3490,
    dislikes: 4300,
    comments: 2100,
    shares: 5000,
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
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <Tooltip cursor={false} content={<SubscribersToolTip />} />
            <Line
              type="monotone"
              dataKey="dislikes"
              stroke="#BA0021"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="likess"
              stroke="#4FFFB0"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="comments"
              stroke="#0000FF"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="shares"
              stroke="#FEBE10"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
          {/* <AreaChart
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
          </AreaChart> */}
        </ResponsiveContainer>
      </CardContent>

      <div className="flex justify-between px-6">
        <div className="flex flex-col gap-2">
          <div className="text-xs font-semibold">Likes</div>
          <div className="text-lg font-bold flex items-center gap-2">
            162,222
            <div className="flex items-center gap-1 font-bold rounded-md text-xs text-red-600">
              <TrendingDown className="w-3 h-3" strokeWidth={3} />
              3%
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-xs font-semibold">DisLikes</div>
          <div className="text-lg font-bold flex items-center gap-2">
            162,222
            <div className="flex items-center gap-1 font-bold rounded-md text-xs text-green-600">
              <TrendingUp className="w-3 h-3" strokeWidth={3} />
              3%
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-xs font-semibold">Comments</div>
          <div className="text-lg font-bold flex items-center gap-2">
            162,222
            <div className="flex items-center gap-1 font-bold rounded-md text-xs text-green-600">
              <TrendingUp className="w-3 h-3" strokeWidth={3} />
              3%
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-xs font-semibold">Shares</div>
          <div className="text-lg font-bold flex items-center gap-2">
            162,222
            <div className="flex items-center gap-1 font-bold rounded-md text-xs text-red-600">
              <TrendingDown className="w-3 h-3" strokeWidth={3} />
              3%
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
