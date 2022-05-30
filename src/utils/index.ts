import { runMigrations } from "../services/migrator";
import storage from "../services/userPreferences";
import { migrations } from "../migrations";

export const applyMigrations = () => {
  if (migrations) {
    const appliedMigrations = storage.getItem("appliedMigrations") || [];
    const newMigrations = runMigrations(migrations, appliedMigrations);
    storage.setItem("appliedMigrations", [
      ...appliedMigrations,
      ...newMigrations
    ]);
  }
};
