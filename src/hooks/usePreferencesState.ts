import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { setUserPreferences } from "../services/api";
import { debounce } from "lodash";
import { PreferencesStorage } from "../services/userPreferences";

const setPreferenses = debounce(async () => {
  console.log(JSON.stringify(PreferencesStorage.extract()));
  const data = await setUserPreferences(PreferencesStorage.extract());
  PreferencesStorage.setupStorage(JSON.parse(data.preferences));
  console.log("changed", PreferencesStorage.extract());
}, 3000);

export const usePreferencesState = <T>(
  storageKey: string
): [T | null, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T | null>(
    PreferencesStorage.getItem<T>(storageKey)
  );

  useEffect(() => {
    if (value) {
      PreferencesStorage.setItem(storageKey, value);
      setPreferenses();
    }
  }, [value, storageKey]);

  return [value, setValue];
};
