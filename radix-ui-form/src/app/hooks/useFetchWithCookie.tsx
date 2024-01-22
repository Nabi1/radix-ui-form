import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Category } from "../shared/types";

export const useFetchWithCookie = (url: string, cookieName: string) => {
  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cookieData = Cookies.get(cookieName);
        if (cookieData) {
          setData(JSON.parse(cookieData));
        } else {
          const response = await fetch(url);
          const newData = await response.json();
          Cookies.set(cookieName, JSON.stringify(newData));
          setData(newData);
        }
      } catch (err: unknown) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, cookieName]);

  return { data, loading, error };
};
