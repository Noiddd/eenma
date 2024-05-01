import React from "react";

export default function TrafficSourceLabel({
  x,
  y,
  width,
  height,
  value,
  name,
}) {
  return (
    <text x={x + 15} y={y + height / 2 + 4} fill="#979A9B" fontSize={13}>
      {name}
    </text>
  );
}
