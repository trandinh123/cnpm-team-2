import { useState, useEffect, useCallback } from "react";

export default function useFetchApi({ initialUrl, method = "GET" }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  const fetchData = useCallback(
    async (url = initialUrl) => {
      try {
        setLoading(true);
        const res = await fetch(url, {
          method,
          credentials: "include",
        });
        const { data } = await res.json();
        setData(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
        setFetched(true);
      }
    },
    [method, initialUrl]
  );

  useEffect(() => {
    if (!fetched) {
      fetchData();
    }
  }, [fetchData, fetched]);

  return {
    data,
    setData,
    loading,
    setLoading,
    fetched,
    refetch: fetchData,
  };
}
