import { useQuery } from 'react-query';
import { getAllCountries } from '../services/countriesService';

const useCountries = () => {
  const {
    data: countries = [],
    error,
    isError,
    isLoading,
  } = useQuery('countries', getAllCountries, { cacheTime: 300000 });

  return { countries, error, isLoading, isError };
};

export default useCountries;
