"use client";

import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function Page() {
  const { resolvedTheme } = useTheme();
  if (resolvedTheme === "dark") {
    return (
      <UserProfile
        path="/user-profile"
        appearance={{
          baseTheme: dark,
        }}
      />
    );
  } else {
    return <UserProfile path="/user-profile" />;
  }
}