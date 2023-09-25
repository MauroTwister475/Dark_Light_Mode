
import { createContext, ReactNode, useContext, useState } from "react";

export type Theme = 'light' | 'dark';

interface ContextThemeData {
  theme: string,
  setTheme: (theme: Theme) => void, // func. para actulizar o valor
}

const ContextTheme = createContext<ContextThemeData>(
  {} as ContextThemeData)// para ter essa tipagem

export function ContextThemeProvider({children}: {children: ReactNode}) {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ContextTheme.Provider value={{ theme, setTheme }}>
      {children}
    </ContextTheme.Provider>
  )
}

export function useThemeContext() {
  return useContext(ContextTheme);
}