import { useEffect, useState } from 'react';

const useApi = (callbackFn) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    callbackFn()
      .then(response => {
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
  }, [callbackFn]);

  return { data, loading, error };
}

export default useApi;