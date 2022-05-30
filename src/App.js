import { useEffect, useState } from "react";
import { getUserPreferences } from "./services/api";
import { Children } from "./components/Children";
import storage from "./services/userPreferences";
import "./styles.css";
import { applyMigrations } from "./utils";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const userPrefs = await getUserPreferences();
      storage.setupStorage(JSON.parse(userPrefs.preferences));
      console.log(storage.extract());
      applyMigrations();
      setLoading(false);
    })();
  }, []);
  return (
    <div className="App">
      {loading ? <h3>Loading...</h3> : <Children />}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
