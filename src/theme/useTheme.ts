import { useContext } from "react"
import { LOCAL_STORAGE_THEM_KEY, Theme, ThemeContext } from "./ThemeContext"

interface useThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme() {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEM_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}