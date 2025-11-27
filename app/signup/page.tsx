"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const Page = () => {
  const { push } = useRouter();
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
    <div className="flex min-h-screen justify-center items-center flex-col gap-3 relative">
      <img
        src="/userNature.jpg"
        className="absolute inset-0 w-full object-cover object-center h-full"
      />
      <div className="rounded-2xl gap-5 p-20 flex flex-col absolute text-white bg-gray-400/50">
        <Input
          name="name"
          placeholder="username here..."
          value={userSignUp.name}
          onChange={handleChange}
          className="bg-white"
        />
        <Input
          name="email"
          placeholder="email here..."
          value={userSignUp.email}
          onChange={handleChange}
          className="bg-white"
        />
        <Input
          name="password"
          type="password"
          placeholder="password here..."
          value={userSignUp.password}
          onChange={handleChange}
          className="bg-white"
        />
        <Button variant="secondary" onClick={handleSignUp}>
          Sign up
        </Button>
        <div className="flex flex-col items-center text-black">
          Already have an account?
          <div className="text-blue-400" onClick={() => push("login")}>
            Log in
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
