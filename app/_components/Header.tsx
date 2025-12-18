"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-between w-full fixed top-0 z-50 transition-colors duration-300 rounded-b-2xl ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/logo.jpg"
            alt="Team Logo"
            className="h-10 m-3 rounded-2xl transition-all duration-300"
          />
        </Link>
        <div>
          {scrolled && (
            <>
              <Button variant="ghost" onClick={() => push("/travel")}>
                Travel
              </Button>
              <Button variant="ghost" onClick={() => push("/Custom-Trip")}>
                Custom Trip
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="mr-5">
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
    </header>
  );
};
