import React from "react";
import { usePreferencesState } from "../hooks/usePreferencesState";

interface CheckboxProps {
  name: string;
  onChange: (val: boolean) => void;
  value: boolean;
}
const Checkbox = ({ name, onChange, value }: CheckboxProps) => {
  return (
    <label>
      <input
        type="checkbox"
        onChange={(e) => onChange(e.currentTarget.checked)}
        checked={value}
      />
      {name}
    </label>
  );
};

const allCollumns = ["name", "value", "site", "model", "S/N"];

export const Children = () => {
  const [checked, setChecked] = usePreferencesState<string[]>("checkboxes");
  // console.log("children", storage.extract());

  const handleChange = (name: string) => (value: boolean) => {
    if (value) {
      setChecked((prev) => [...(prev || []), name]);
    } else {
      setChecked((prev) => prev?.filter((col) => col !== name));
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {allCollumns.map((col) => (
        <Checkbox
          key={col}
          value={!!checked?.includes(col)}
          onChange={handleChange(col)}
          name={col}
        />
      ))}
    </div>
  );
};
