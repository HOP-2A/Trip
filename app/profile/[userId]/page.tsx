"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [userInfo, setUserInfo] = useState();
  const params = useParams();
  const { userId } = params;

  useEffect(() => {
    if (!userId) return;

    async function getUser() {
      try {
        const res = await fetch(`/api/user/${userId}`);
        const data = await res.json();

        if (res.ok) {
          setUserInfo(data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    getUser();
  }, []);

  return (
    <div>
      <div>{userInfo.name}</div>
    </div>
  );
};

export default Page;
