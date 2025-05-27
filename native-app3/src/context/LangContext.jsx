import { createContext } from "react";
import React, { useState } from "react";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("tr - TR");

  const values = { lang, setLang };

  return <LangContext.Provider value={values}>{children}</LangContext.Provider>;
};

export default LangContext;
