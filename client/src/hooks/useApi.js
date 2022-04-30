import { useState, useEffect } from 'react';

const useApi = (task) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    task()
      .then(response => {
        if (!response.ok) {
          throw Error("Could not fetch data");
        }
        setData(response.data)
        setError(null)
      })
      .catch(err => {
        setData(null)
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [task]);

  return { data, loading, error };
}

export default useApi;