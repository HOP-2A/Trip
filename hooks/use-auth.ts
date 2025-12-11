import { useState, useEffect } from "react";

export const useAuth = (clerkId: string | null | undefined) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (clerkId) {
      const fetchUser = async () => {
        try {
          const response = await fetch(`/api/auth/${clerkId}`);
          if (!response.ok) {
            throw new Error("Failed to fetch user");
          }
          const data = await response.json();
          setUser(data);
        } catch (error) {
          setError(error as Error);
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    } else {
      setLoading(false);
    }
  }, [clerkId]);

  return { user, loading, error };
};
