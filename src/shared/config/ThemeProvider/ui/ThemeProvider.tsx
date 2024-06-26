import { FC, useMemo, useState } from "react"
import { LOCAL_STORAGE_THEM_KEY, Theme, ThemeContext } from "../context/ThemeContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEM_KEY) as Theme || Theme.LIGHT


const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)
    

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
