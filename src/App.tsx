import React, { useEffect, useState } from "react";
import { getUserPreferences } from "./services/api";
import { Children } from "./components/Children";
import "./styles.css";
import { applyMigrations } from "./utils";
import { storage } from "./services/userPreferences";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const userPrefs = await getUserPreferences();
      storage.setupStorage(JSON.parse(userPrefs.preferences));
      // console.log(storage.extract());
      applyMigrations();
      setLoading(false);
    })();
  }, []);
  return (
    <div className="App">{loading ? <h3>Loading...</h3> : <Children />}</div>
  );
}
