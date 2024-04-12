"use client";

import React from "react";

import NavLink from "./NavLink";

import { navigations } from "@/constants/Navigations";

export default function Navigation() {
  return (
    <div className="flex flex-col gap-5 text-xs font-medium">
      {navigations.map((navigation) => (
        <NavLink
          key={navigation.value}
          href={navigation.href}
          value={navigation.value}
        />
      ))}
    </div>
  );
}
