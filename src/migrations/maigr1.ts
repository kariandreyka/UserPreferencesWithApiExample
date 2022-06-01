import { PreferencesStorage } from "../services/userPreferences";

export default {
  name: "test-migration",
  up: () => {
    PreferencesStorage.clear();
    PreferencesStorage.setItem("biba", ["biba", "boba", "aboba"]);
  }
};
