import { useState, useEffect } from "react";


export function useLocalStorage(key, initialValue) {
  const[storeValue, setStoreValue] = useState(() => {
    try{
      const item = localStorage.getItem(key);
      return  item && item !== '""' ? JSON.parse(item) : initialValue;
    } catch(error) {
      console.error("Error reading the localStorage", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try{
      localStorage.setItem(key, JSON.stringify(storeValue));

    } catch(error) {
      console.error("Error saving to localStorage", error);
    }
  }, [key, storeValue]);

  return [storeValue, setStoreValue];
}
