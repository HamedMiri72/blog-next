// 'use client'

// import { createContext, useEffect, useState } from "react";



// export const ThemeContext = createContext();


// const getFromLocalStorage = () => {

//     if(typeof window !== undefined){
//         const value = localStorage.getItem("theme");
//         return value || "light";
//     }
// }

// export const ThemeContextProvider = ({ children }) => {
//     const [theme, SetTheme] = useState(() => {
//         return getFromLocalStorage();
//     });

//     const toggle = ()=>{
//         SetTheme(theme === "light" ? "dark" : "light")
//     }

//     useEffect(()=>{
//         localStorage.setItem("theme", theme);
//     }, [theme])

//     return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>;
// }