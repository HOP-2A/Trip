"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";

const Page = () => {
  const [userSignUp, setUserSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(userSignUp);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserSignUp({
      ...userSignUp,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async () => {
    await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userSignUp),
    });
  };

  return (
    <div className="flex min-h-screen justify-center items-center flex-col gap-3">
      <div className="border w-50 flex flex-col">
        <Input
          name="email"
          placeholder="email here..."
          value={userSignUp.email}
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="password here..."
          value={userSignUp.password}
          onChange={handleChange}
        />
        <Button variant="secondary" onClick={handleSignUp}>
          Log in
        </Button>
      </div>
      <div className="flex flex-col items-center">
        Do not have an account?<div className="text-blue-400">Sign Up</div>
      </div>
    </div>
  );
};

export default Page;
