import React from "react";

import { BarList, Card } from "@tremor/react";

const datahero = [
  { name: "/home", value: 456 },
  { name: "/imprint", value: 351 },
  { name: "/cancellation", value: 51 },
  { name: "/tes", value: 51 },
  { name: "/ss", value: 51 },
  { name: "/cancetdfsllation", value: 51 },
  { name: "/home", value: 456 },
  { name: "/imprint", value: 351 },
];

export default function TrafficSourceChart() {
  return (
    <Card className="h-96 w-[1000px] grow-0">
      <BarList data={datahero} className="mx-auto max-w-sm" />
    </Card>
  );
}
