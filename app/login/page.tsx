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
    <div className="flex min-h-screen justify-center items-center flex-col gap-3 relative">
      <img
        src="/userNature.jpg"
        className="absolute inset-0 w-full object-cover object-center h-full"
      />
      <div className=" rounded-2xl gap-5 p-20  flex flex-col absolute text-white bg-gray-400/50">
        <Input
          name="email"
          placeholder="email here..."
          value={userLogin.email}
          onChange={handleChange}
          className="bg-white"
        />
        <Input
          name="password"
          type="password"
          placeholder="password here..."
          value={userLogin.password}
          onChange={handleChange}
          className="bg-white"
        />
        <Button variant="secondary" onClick={handleLogin}>
          Log in
        </Button>
        <div className="flex flex-col items-center">
          Do not have an account?
          <div className="text-blue-400" onClick={() => push("/signup")}>
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
