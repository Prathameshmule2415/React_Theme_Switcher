import React, { useContext } from "react";
import ThemeContext from "../context/theme.context";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div>
      <button
        onClick={() => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        }}
      >
        Change Theme
      </button>
      <span>{themeMode === "light" ? "Turn Off" : "Lights On"}</span>
    </div>
  );
};

export default ThemeToggler;
