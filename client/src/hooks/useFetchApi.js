import { useState, useEffect, useCallback } from "react";

export default function useFetchApi({
  initialUrl,
  method = "GET",
  defaultData = null,
  dependencies = [],
}) {
  const [data, setData] = useState(defaultData);
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  const fetchData = useCallback(
    async (url = initialUrl) => {
      try {
        setLoading(true);
        const res = await fetch(url, {
          method,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-cache",
        });
        const { data, success } = await res.json();
        setSuccess(success);
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
    fetchData();
  }, dependencies);
  return {
    data,
    setData,
    loading,
    setLoading,
    fetched,
    refetch: fetchData,
    success,
  };
}
