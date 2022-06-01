import { storage } from "../services/userPreferences";

export default {
  name: "test-migration",
  up: () => {
    storage.setItem("biba", ["biba", "boba", "aboba"]);
  }
};
