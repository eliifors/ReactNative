// App.js
import React from "react";
import { ThemeContextProvider } from "./src/context/ThemeContext";
import Router from "./src/Router";
import { LangProvider } from "./src/context/LangContext"; // <-- import LangProvider

function App() {
  return (
    <LangProvider>
      <ThemeContextProvider>
        <Router />
      </ThemeContextProvider>
    </LangProvider>
  );
}

export default App;
