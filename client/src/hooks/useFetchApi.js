import { useState, useEffect } from "react";

export default function useFetchApi({ initialUrl, method = "GET" }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  const fetchData = async (url = initialUrl) => {
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
    }
  };

  useEffect(() => {
    fetchData();
    setFetched(true);
  }, []);

  return {
    data,
    setData,
    loading,
    setLoading,
    fetched,
    refetch: fetchData,
  };
}
