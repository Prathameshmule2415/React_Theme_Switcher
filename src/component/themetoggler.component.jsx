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
        style={{
          height: "120px",
          width: "100px",
          margin: "5px",
          padding: "15px",
        }}
      >
        Change Theme To {themeMode === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default ThemeToggler;
