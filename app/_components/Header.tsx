"use client";

import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <div className="flex justify-around fixed left-0 top-0 bg-white">
      <div>Home</div>
      <div>Trips</div>
      <div>About us</div>
      <Input placeholder="Search here..." />
    </div>
  );
};
