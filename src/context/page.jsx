import { useContext } from "react";
import { ThemeContext } from "./themeContextInstance";

export function Page() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
    <div style={{ 
        background: theme === "dark" ? "#222" : "#fff", 
        color: theme === "dark" ? "#fff" : "#000", 
        padding: "250px",
        textAlign: "center"
    }}>
        <h1>Current Theme: {theme}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
    );
}