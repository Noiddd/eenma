"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Calendar, LayoutDashboard, Mail, Image } from "lucide-react";

export default function NavLink({ href, value, ...props }) {
  let pathname = usePathname();

  if (pathname == "/schedule/month" || pathname == "/schedule/week") {
    pathname = "/schedule/month";
  }

  const isActive = href === pathname;

  return (
    <div className={`flex relative items-center cursor-default`}>
      <Link href={href} className="peer">
        {value == "Analytics" && (
          <LayoutDashboard
            strokeWidth={2.5}
            className={`h-4 w-4 hover:text-black dark:hover:text-white cursor-default ${
              isActive ? "dark:text-white text-black" : "text-muted-foreground"
            }`}
          />
        )}

        {value == "Schedule" && (
          <Calendar
            strokeWidth={2.5}
            className={`h-4 w-4  hover:text-black dark:hover:text-white cursor-default ${
              isActive ? "dark:text-white text-black" : "text-muted-foreground"
            }`}
          />
        )}

        {value == "Content" && (
          <Image
            strokeWidth={2.5}
            className={`h-4 w-4  hover:text-black dark:hover:text-white cursor-default ${
              isActive ? "dark:text-white text-black" : "text-muted-foreground"
            }`}
          />
        )}

        {value == "Inbox" && (
          <Mail
            strokeWidth={2.5}
            className={`h-4 w-4  hover:text-black dark:hover:text-white cursor-default ${
              isActive ? "dark:text-white text-black" : "text-muted-foreground"
            }`}
          />
        )}
      </Link>
      <div
        className={`transition delay-500 duration-200 ease-in-out peer-hover:opacity-100 dark:peer-hover:opacity-100 opacity-0 absolute left-7 z-50 rounded-md border-popover border bg-popover px-3 py-2 text-popover-foreground shadow-md outline-none`}
      >
        {value}
      </div>
    </div>
  );
}
