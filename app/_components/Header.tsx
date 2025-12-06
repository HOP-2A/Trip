"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";

export const Header = () => {
  return (
    <div className="relative z-1">
      <div className="absolute z-2">
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
    </div>
  );
};
