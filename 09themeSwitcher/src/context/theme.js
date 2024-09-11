import React, { useContext } from "react";
import { createContext } from "react";



export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})


export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}



// export default const  ThemeContext = createContext()

// // ThemeContextProvider.jsx

// const ThemeContextProvider = ( {children} ) => {
//     let themeMode = "light"
//     <ThemeContext.Provider value = { {} } >
//         {children}
//     <ThemeContext.Provider/>
// }

