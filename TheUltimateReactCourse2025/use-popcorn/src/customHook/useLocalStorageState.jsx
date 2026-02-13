import {useEffect, useState} from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(() => {            // Pulls in the data from local storage
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {                                               // Store into local memory0.````
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])


  return [value, setValue];

}