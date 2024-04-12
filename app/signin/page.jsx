import Link from "next/link";

import { cn } from "@/lib/utils";
import SignInForm from "@/components/signin/SignInForm";
import useUserSession from "@/hooks/useUserSession";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const { data } = await useUserSession();

  if (data.user) {
    return redirect("/analytics");
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <Link
          href="/signup"
          className={cn(
            "absolute right-4 top-4 md:right-8 md:top-8 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-default"
          )}
        >
          Sign Up
        </Link>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Sign in to your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to sign in
              </p>
            </div>
            <SignInForm />
          </div>
        </div>
      </div>
    </>
  );
}
