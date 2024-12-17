import React, { createContext, PropsWithChildren, useState } from "react";

type ThemeType = {
    isDarkMode: boolean
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeType>(
    {
        isDarkMode: true,
        toggleTheme: () => { }
    }
)

export const ThemeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme === "dark" : true; // Default to dark mode if no saved theme
    });

    const toggleTheme = () => {
        setIsDarkMode((prev) => {
            const newTheme = !prev;
            localStorage.setItem("theme", newTheme ? "dark" : "light");
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}