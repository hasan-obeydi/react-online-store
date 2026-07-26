import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(defaultValue);
  useEffect(() => {
    const getLocalStorage = async () => {
      const value = await JSON.parse(localStorage.getItem(key));
      setState(value);
    };
    getLocalStorage();
  }, [key]);
  const setLocalStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };
  return [state, setLocalStorage];
};

export default useLocalStorage;
