import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;

/* 
how to use

const [searchTerm, setSearchTerm] = useState<string>('');
const debouncedSearchTerm = useDebounce(searchTerm, 500);

useEffect(() => {
  // Call the search API with the debounced search term
  search(debouncedSearchTerm);
}, [debouncedSearchTerm]);

*/
