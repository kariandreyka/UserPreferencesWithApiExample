import { AppliedMigration, runMigrations } from "../services/migrator";
import { migrations } from "../migrations";
import { storage } from "../services/userPreferences";

export const applyMigrations = () => {
  if (migrations) {
    const appliedMigrations =
      storage.getItem<AppliedMigration[]>("appliedMigrations") || [];
    const newMigrations = runMigrations(migrations, appliedMigrations);
    storage.setItem("appliedMigrations", [
      ...appliedMigrations,
      ...newMigrations
    ]);
  }
};
