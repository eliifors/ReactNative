import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const values = {
    count,
    setCount,
  };

  return (
    <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
