"use client";

import * as React from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

import SupabaseBrowser from "@/lib/supabase/SupabaseBrowser";

export default function SignInForm({ className, ...props }) {
  const supabase = SupabaseBrowser();

  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const onSignIn = async (provider) => {
    setIsLoading(true);

    if (provider == "google") {
      const { data, error } = supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo:
            location.origin + "/auth/callback?next=/platform/analytics",
        },
      });

      console.log("login data");
      console.log(data);
      console.log(error);

      setIsLoading(false);
    }

    if (provider == "email") {
      if (email == "") {
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: true,
          emailRedirectTo:
            location.origin + "/auth/callback?next=/platform/analytics",
        },
      });

      console.log(data);
      console.log(error);

      setIsLoading(false);
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={() => onSignIn("email")}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4 animate-spin"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            )}
            Sign in with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={() => onSignIn("google")}
      >
        {isLoading && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 animate-spin"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        )}
        Google
      </Button>
    </div>
  );
}
