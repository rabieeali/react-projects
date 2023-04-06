import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';


const useAxios = (config: AxiosRequestConfig) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<AxiosError<any, any> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios(config);
        setData(response.data);
      } catch (error) {
        const err = error as AxiosError;
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, error, isLoading };
};

export default useAxios;

