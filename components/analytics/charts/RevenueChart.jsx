import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Nov",
    uv: 4000,
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
    <Card className="h-96 flex flex-col gap-5">
      <div className="text-sm font-semibold px-10">Revenue</div>
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
          <XAxis
            dataKey="name"
            padding={{ left: 10, right: 10 }}
            axisLine={false}
            tickLine={false}
            interval={0}
          />
          <Tooltip cursor={false} />
          <Bar dataKey="uv" fill="#F5F5F5" radius={[6, 6, 6, 6]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
