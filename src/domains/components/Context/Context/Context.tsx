import { createContext, useContext, useState } from "react";

interface Theme {
  foreground: string;
  background: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  fontFamily: string;
  fontSize: string;
}

const lightTheme: Theme = {
  foreground: "#000000",
  background: "#eeeeee",
  primaryColor: "#4285f4",
  secondaryColor: "#34a853",
  tertiaryColor: "#fbbc05",
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
};

const darkTheme: Theme = {
  foreground: "#ffffff",
  background: "#333333",
  primaryColor: "#1e90ff",
  secondaryColor: "#34a853",
  tertiaryColor: "#fbbc05",
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const Context = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <div
        style={{
          backgroundColor: currentTheme.background,
          color: currentTheme.foreground,
          fontFamily: currentTheme.fontFamily,
          fontSize: currentTheme.fontSize,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Theme Management Example</h1>
        <Button />
        <ToggleThemeButton />
      </div>
    </ThemeContext.Provider>
  );
};

const Button = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Button must be used within a ThemeContext.Provider");
  }

  const { theme } = themeContext;

  return (
    <button
      style={{
        backgroundColor: theme.primaryColor,
        color: theme.foreground,
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        marginTop: "20px",
        cursor: "pointer",
      }}
    >
      Themed Button
    </button>
  );
};

const ToggleThemeButton = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error(
      "ToggleThemeButton must be used within a ThemeContext.Provider"
    );
  }

  const { toggleTheme, theme } = themeContext;

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme.secondaryColor,
        color: theme.foreground,
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        marginTop: "20px",
        cursor: "pointer",
      }}
    >
      Toggle Theme
    </button>
  );
};

export default Context;
