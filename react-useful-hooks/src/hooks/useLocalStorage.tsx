import { useState, useEffect } from 'react';

type Value<T> = T | undefined;

function useLocalStorage<T>(key: string, initialValue?: Value<T>): [Value<T>, (value: Value<T>) => void] {
  const [storedValue, setStoredValue] = useState<Value<T>>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key '${key}':`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const serializedValue = JSON.stringify(storedValue);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error writing localStorage key '${key}':`, error);
    }
  }, [key, storedValue]);

  const setValue = (value: Value<T>) => {
    setStoredValue(value);
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
