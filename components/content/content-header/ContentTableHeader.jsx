import React from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
import { LabelFilter } from "../content-table/LabelFilter";

export default function ContentTableHeader({ table }) {
  return (
    <div className="flex items-end justify-between">
      <div className="flex gap-2 items-end">
        <div className="flex gap-2 items-center">
          <Input
            placeholder="Filter emails..."
            value={table.getColumn("email")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>

        <LabelFilter />
      </div>

      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="border bg-card text-card-foreground shadow-sm px-3 py-2 rounded-lg text-xs hover:bg-accent hover:text-accent-foreground">
            <div className="flex gap-2 items-center">
              Content
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()}>
            <DropdownMenuItem>Content</DropdownMenuItem>
            <DropdownMenuItem>Labels</DropdownMenuItem>
            <DropdownMenuItem>Traffic Source</DropdownMenuItem>
            <DropdownMenuItem>Geography</DropdownMenuItem>
            <DropdownMenuItem>Cities</DropdownMenuItem>
            <DropdownMenuItem>Age</DropdownMenuItem>
            <DropdownMenuItem>Gender</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="border bg-card text-card-foreground shadow-sm px-3 py-2 rounded-lg text-xs hover:bg-accent hover:text-accent-foreground">
            <div className="flex gap-2 items-center">
              Columns
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
