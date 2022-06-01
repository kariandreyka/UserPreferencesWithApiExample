import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { setUserPreferences } from "../services/api";
import { debounce } from "lodash";
import { storage } from "../services/userPreferences";

const setPreferences = debounce(async () => {
  console.log(JSON.stringify(storage.extract()));
  const data = await setUserPreferences(storage.extract());
  storage.setupStorage(JSON.parse(data.preferences));
  console.log("changed", storage.extract());
}, 3000);

export const usePreferencesState = <T>(
  storageKey: string
): [T | null, Dispatch<SetStateAction<T | null>>] => {
  const [value, setValue] = useState<T | null>(storage.getItem<T>(storageKey));

  useEffect(() => {
    if (value) {
      storage.setItem(storageKey, value);
      setPreferences();
    }
  }, [value, storageKey]);

  return [value, setValue];
};
