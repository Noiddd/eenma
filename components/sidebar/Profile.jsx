"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React from "react";

import { useRouter } from "next/navigation";

import { useTheme } from "next-themes";
import { useQueryClient } from "@tanstack/react-query";
import SupabaseBrowser from "@/lib/supabase/SupabaseBrowser";

export default function Profile({ userData }) {
  const supabase = SupabaseBrowser();

  const router = useRouter();

  const { setTheme } = useTheme();

  const queryClient = useQueryClient();

  // log out function
  const handleLogOut = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log("error on sign out");
      console.log(error);
      return;
    }

    queryClient.clear();

    router.push("/");
  };

  const handleSettings = () => {
    router.push("/settings");
  };

  return (
    <div className="mt-8">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage
              src={userData.user_metadata.avatar_url}
              alt={userData.user_metadata.name}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-48"
          align="start"
          alignOffset={11}
          forceMount
        >
          <div className="flex flex-col space-y-4 p-2">
            <p className="text-xs font-medium leading-none text-muted-foreground">
              {userData.email}
            </p>
            <div className="flex items-center gap-x-2">
              <div className="rounded-md bg-secondary p-1">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={userData.user_metadata.avatar_url}
                    alt={userData.user_metadata.name}
                  />
                </Avatar>
              </div>
              <div className="space-y-1">
                <p className="text-sm line-clamp-1">
                  {userData.user_metadata.name}
                </p>
              </div>
            </div>
          </div>

          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="w-full text-muted-foreground text-xs cursor-default"
            onClick={handleSettings}
          >
            <div role="button cursor-default">Settings</div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="text-muted-foreground text-xs cursor-default">
              <span>Theme</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  className="text-muted-foreground text-xs cursor-default"
                  onClick={() => setTheme("light")}
                >
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-muted-foreground text-xs cursor-default"
                  onClick={() => setTheme("dark")}
                >
                  <span>Dark</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="w-full text-muted-foreground text-xs cursor-default"
            onClick={handleLogOut}
          >
            <div role="button cursor-default">Log out</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
