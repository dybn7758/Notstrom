import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { theme } from "../../lib/Atoms.jsx";

const ModeSelector = () => {
  const [themeMode, setThemeMode] = useRecoilState(theme);
  return (
    <div className="switch-container">
      <label>
        <input
          type="checkbox"
          name={"swicher"}
          checked={themeMode || false}
          onChange={() => setThemeMode(!themeMode)}
          className={`${themeMode ? "light" : "dark"} switch`}
        />
        <div>
          <div></div>
        </div>
      </label>
    </div>
  );
};
export default ModeSelector;
