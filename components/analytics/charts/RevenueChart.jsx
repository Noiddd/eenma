import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { RevenueToolTip } from "../tooltip/RevenueToolTip";

const data = [
  {
    name: "May",
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "June",
    uv: 2000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Jul",
    uv: 4300,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Aug",
    uv: 3000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Sep",
    uv: 6000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Oct",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Nov",
    uv: 5000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Dec",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Jan",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Feb",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Mar",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Apr",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

export default function RevenueChart() {
  return (
    <div className="h-96 flex flex-col gap-5 rounded-2xl border bg-card text-card-foreground shadow-sm pt-6 w-4/6">
      <div className="text-sm font-semibold px-6 flex gap-2 items-center">
        Revenue
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 5,
            left: 5,
            bottom: 0,
          }}
          barSize={20}
        >
          <defs>
            <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="40%" stopColor="#88d2dd" stopOpacity={1} />
              <stop offset="100%" stopColor="#88d2dd" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            padding={{ left: 10, right: 10 }}
            axisLine={false}
            tickLine={false}
            interval={0}
          />
          <Tooltip cursor={false} content={<RevenueToolTip />} />
          <Bar dataKey="uv" fill="url(#revenue)" radius={[6, 6, 6, 6]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
