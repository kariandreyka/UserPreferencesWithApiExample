import storage from "../services/userPreferences";

export const Children = () => {
  console.log("children", storage.extract());
  return "Children";
};
