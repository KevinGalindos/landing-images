import { useState, useEffect } from "react";
import { BASE_URL, CLIENT_ID } from './../enviroment/config'

export default function useFetch({ url, options }) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(undefined);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${BASE_URL}/${url}&client_id=${CLIENT_ID}`, options);
          console.log(`${BASE_URL}/${url}&client_id=${CLIENT_ID}`)
        setResult(await res.json());
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [url, options]);
  return { loading, result, error };
}