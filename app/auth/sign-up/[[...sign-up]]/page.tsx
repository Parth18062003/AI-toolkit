"use client";

import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function Page() {
  const { resolvedTheme } = useTheme();
  if (resolvedTheme === "dark") {
    return (
      <SignUp
        path="/auth/sign-up"
        appearance={{
          baseTheme: dark,
        }}
      />
    );
  } else {
    return <SignUp path="/auth/sign-up" />;
  }
}