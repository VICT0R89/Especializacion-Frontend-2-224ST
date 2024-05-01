import { FC, createContext, ReactNode, useState } from "react";


interface ThemeContextType {
  theme: 'light' | 'dark';
  toogleTheme: ()=> void;
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextType)

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {

  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toogleTheme = () => {
    setTheme(theme === 'light'? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{theme, toogleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider