"use client";

import { ThemeColorSelected, ThemeMode } from "../constants";
import { ThemeConfigType, ThemeContextType } from "../types/themeConfig";
import { createContext, useState } from "react";

import useSetColor from "../hooks/useSetColor";
const defaultValue: ThemeConfigType = {
  themeMode: ThemeMode.DARK,
  primaryColors: [
    { color: "#f75023" },
    { color: "#3b82f6" },
    { color: "#a855f7" },
    { color: "#eab308" },
  ],
  secondaryColors: [
    { color: "#8067f0" },
    { color: "#3b82f6" },
    { color: "#a855f7" },
    { color: "#eab308" },
  ],
  successColors: [
    { color: "#1cbe59" },
    { color: "#84cc16" },
    { color: "#10b981" },
    { color: "#22c55e" },
  ],
  primary: "#f75023",
  secondary: "#8067f0",
  success: "#1cbe59",
  isDarkMode: true,
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: defaultValue,
});

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [themeConfig, setThemeConfig] = useState<ThemeConfigType>(defaultValue);
  const { setColor } = useSetColor();
  const toggleTheme = () => {
    let currentTheme = ThemeMode.LIGHT;
    if (themeConfig.themeMode === ThemeMode.LIGHT) {
      currentTheme = ThemeMode.DARK;
    }
    setThemeConfig({
      ...themeConfig,
      themeMode: currentTheme,
      isDarkMode: currentTheme === ThemeMode.DARK,
    });
  };
  const updateColor = (color: string, type: ThemeColorSelected) => {
    setThemeConfig({ ...themeConfig, [type]: color });
    setColor(color, type);
  };
  return (
    <ThemeContext.Provider
      value={{
        theme: themeConfig,
        toggleTheme: toggleTheme,
        updateColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
