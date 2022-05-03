import { useState, useCallback } from "react";

export type localStorageReturn<T> = [
  T,
  (val: T | ((val: T) => T)) => void,
  () => void
];
export function useLocalStorage<T>(
  key: string,
  initVal?: T | undefined | null
): localStorageReturn<T>;

export function useLocalStorage<T>(
  key: string,
  initialValue?: T | undefined | null
) {
  const [storedValue, setStoredValue] = useState<T>((): any => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item: string | null = window.localStorage.getItem(key);
      return item ? item : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = useCallback((value: T | ((val: T) => T)): void => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        if (typeof value === "object") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } else {
          window.localStorage.setItem(key, String(valueToStore));
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const deleteStorage = useCallback(() => {
    if (window.localStorage && typeof key === "string") {
      try {
        setStoredValue("" as unknown as T);
        window.localStorage.removeItem(key);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  return [storedValue, setValue, deleteStorage] as localStorageReturn<T>;
}
