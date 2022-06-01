import { AppliedMigration, runMigrations } from "../services/migrator";
import { migrations } from "../migrations";
import { PreferencesStorage } from "../services/userPreferences";

export const applyMigrations = () => {
  if (migrations) {
    const appliedMigrations =
      PreferencesStorage.getItem<AppliedMigration[]>("appliedMigrations") || [];
    const newMigrations = runMigrations(migrations, appliedMigrations);
    PreferencesStorage.setItem("appliedMigrations", [
      ...appliedMigrations,
      ...newMigrations
    ]);
  }
};
