import { useState } from 'react';
import { ThemeContext } from './themeContextInstance';

export function ThemeProvider ({ children })  {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    );
}