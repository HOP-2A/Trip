"use client";
import { useState, useEffect, ChangeEvent } from "react";
const Page = () => {
  const [chat, setChat] = useState([]);
  const inputHandleValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
  };
  return (
    <div>
      <div className="flex pt-3 justify-center">
        <input
          type="text"
          onChange={() => inputHandleValue}
          placeholder="text"
        />
      </div>
    </div>
  );
};
export default Page;
