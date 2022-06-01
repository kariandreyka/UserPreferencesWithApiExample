import { mocks } from "../../mocks/userPreferences";

export const setUserPreferences = (preferences: unknown) => {
  mocks.preferences = JSON.stringify(preferences);
  mocks.timestamp = new Date().toDateString();
  return new Promise<typeof mocks>((res) => {
    setTimeout(() => res(mocks), 1000);
  });
};

export const getUserPreferences = () => {
  return new Promise<typeof mocks>((res) => {
    setTimeout(() => res(mocks), 2000);
  });
};
