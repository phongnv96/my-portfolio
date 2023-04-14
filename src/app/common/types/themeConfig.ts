import { ThemeColorSelected, ThemeMode } from "../constants";

interface ThemeColorItem {
    color: string;
}

interface ThemeConfigType {
    themeMode: ThemeMode;
    isDarkMode?: boolean;
    primaryColors?: ThemeColorItem[];
    secondaryColors?: ThemeColorItem[];
    successColors?: ThemeColorItem[];
    [ThemeColorSelected.primarySelected]?: string;
    [ThemeColorSelected.secondarySelected]?: string;
    [ThemeColorSelected.successSelected]?: string;
}


type ThemeContextType = {
    theme?: ThemeConfigType;
    toggleTheme?: () => void;
    updateColor?: (color: string, type: ThemeColorSelected) => void;
};

export type {
    ThemeConfigType,
    ThemeContextType,
    ThemeColorItem
}