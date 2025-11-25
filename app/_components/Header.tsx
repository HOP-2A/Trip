"use client";

import { useRouter } from "next/navigation";

export const Header = () => {
  const { push } = useRouter();
  return (
    <div>
      <div className="fixed top-0 right-0 w-20 z-1">
        <div
          onClick={() => {
            push("/login");
          }}
          className="border flex items-center px-3 rounded-lg shadow-lg hover:scale-125 transition-transform hover:cursor-pointer text-white "
        >
          Log In
        </div>
      </div>
    </div>
  );
};
