import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //sin el useCallback, funcionaría igual, pero para no volver a crear la función cada vez, lo usamos
  const getData = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [url]);

  return { data, loading, error };
};
