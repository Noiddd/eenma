import React from "react";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "../ui/card";

export default function AnalyticsHeader() {
  return (
    <div className="flex items-end">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="border bg-card text-card-foreground shadow-sm w-full px-3 py-2 rounded-lg text-xs flex gap-2 items-center hover:bg-accent hover:text-accent-foreground">
            Last 7 days
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()}>
          <DropdownMenuItem>Last 7 days</DropdownMenuItem>
          <DropdownMenuItem>Last 28 days</DropdownMenuItem>
          <DropdownMenuItem>Last 90 days</DropdownMenuItem>
          <DropdownMenuItem>Last 365 days</DropdownMenuItem>
          <DropdownMenuItem>Lifetime</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Custom</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
