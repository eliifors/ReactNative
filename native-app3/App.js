// App.js
import React from "react";
import ThemeContextProvider from "./src/context/ThemeContext";
import Router from "./src/Router";
import LangContext from "./src/context/LangContext";

function App() {
  return (
    <LangContext.Provider>
      <ThemeContextProvider>
        <Router />
      </ThemeContextProvider>
    </LangContext.Provider>
  );
}

export default App;
