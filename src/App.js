import React, { useState } from "react";
import ThemeContext from "./theme.context";
import Header from "./component/Header.component";
import HeroSection from "./component/Main.component";
import "./App.css";

const App = () => {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
