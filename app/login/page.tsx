"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const Page = () => {
  const { push } = useRouter();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userLogin),
    });
  };

  return (
    <div className="flex min-h-screen justify-center items-center flex-col gap-3">
      <div className="border w-50 flex flex-col">
        <Input
          name="email"
          placeholder="email here..."
          value={userLogin.email}
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="password here..."
          value={userLogin.password}
          onChange={handleChange}
        />
        <Button variant="secondary" onClick={handleLogin}>
          Log in
        </Button>
      </div>
      <div className="flex flex-col items-center">
        Do not have an account?<div className="text-blue-400" onClick={() => push("/signup")}>Sign Up</div>
      </div>
    </div>
  );
};

export default Page;
