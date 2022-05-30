interface Migration {
  name: string;
  up: () => void;
}

interface AppliedMigration {
  name: string;
  dateApplied: Date;
}

export const runMigrations = (
  migrations: Migration[],
  appliedMigrations: AppliedMigration[]
) => {
  const notAppliedMigrations = migrations.filter(
    (m) => !appliedMigrations.some((am) => m.name === am.name)
  );

  const newAppliedMigrations = [];
  notAppliedMigrations.forEach((m) => {
    m.up();
    newAppliedMigrations.push({
      name: m.name,
      dateApplied: new Date()
    });
  });

  return newAppliedMigrations;
};
