import { mocks } from "../../mocks/userPreferences";

export const getUserPreferences = () => {
  return new Promise((res) => {
    setTimeout(() => res(mocks), 2000);
  });
};
