"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";

export const Header = () => {
  return (
    <div className="absolute">
      <SignedOut>
        <SignUpButton>
          <Button className="cursor-pointer" variant="secondary">
            Нэвтрэх
          </Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};
