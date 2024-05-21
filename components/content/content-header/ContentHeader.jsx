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

export default function ContentHeader() {
  return (
    <div className="flex justify-between">
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="border bg-card text-card-foreground shadow-sm px-3 py-2 rounded-lg text-xs hover:bg-accent hover:text-accent-foreground">
            <div className="flex gap-2 items-center">
              Views
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()}>
            <DropdownMenuItem>Views</DropdownMenuItem>
            <DropdownMenuItem>Subscribers</DropdownMenuItem>
            <DropdownMenuItem>Watch time (hours)</DropdownMenuItem>
            <DropdownMenuItem>Impression</DropdownMenuItem>
            <DropdownMenuItem>Impression click-through rate</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>test</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>test</DropdownMenuItem>
                  <DropdownMenuItem>test</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>test</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="border bg-card text-card-foreground shadow-sm px-3 py-2 rounded-lg text-xs hover:bg-accent hover:text-accent-foreground">
            <div className="flex gap-2 items-center">
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

        <DropdownMenu>
          <DropdownMenuTrigger className="border bg-card text-card-foreground shadow-sm px-3 py-2 rounded-lg text-xs hover:bg-accent hover:text-accent-foreground">
            <div className="flex gap-2 items-center">
              Daily
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()}>
            <DropdownMenuItem>Weekly</DropdownMenuItem>
            <DropdownMenuItem>Monthly</DropdownMenuItem>
            <DropdownMenuItem>Yearly</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
