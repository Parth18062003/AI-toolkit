"use client";

import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function Page() {
  const { resolvedTheme } = useTheme();
  if (resolvedTheme === "dark") {
    return (
      <SignIn
        path="/auth/sign-in"
        appearance={{
          baseTheme: dark,
        }}
      />
    );
  } else {
    return <SignIn path="/auth/sign-in" />;
  }
}
