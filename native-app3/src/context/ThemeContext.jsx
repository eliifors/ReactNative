import { createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const values = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
