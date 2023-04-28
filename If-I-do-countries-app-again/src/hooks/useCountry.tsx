import { useQuery } from 'react-query';
import { getCountryByName } from '../services/countriesService';

const useCountry = (name: string) => {

  const {
    data: country = [],
    error,
    isError,
    isLoading,
  } = useQuery('country', () => getCountryByName(name), {
    cacheTime: 300000,
  });

  return { country, error, isLoading, isError };
};

export default useCountry;
