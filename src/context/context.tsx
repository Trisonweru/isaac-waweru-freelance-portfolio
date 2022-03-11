/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useContext, useState } from 'react';

type appContextType = {
  theme: boolean;
  onThemeChange: () => void;
};

const appContextDefaultValues: appContextType = {
  theme: true,
  onThemeChange: () => {},
};

const AppContext = createContext<appContextType>(appContextDefaultValues);

export function useAppCtx() {
  return useContext(AppContext);
}

type Props = {
  children: ReactNode;
};

export function AppProvider({ children }: Props) {
  const [theme, setThemeDark] = useState<boolean>(true);

  const onThemeChange = () => {
    setThemeDark(!theme);
  };

  const value = {
    theme,
    onThemeChange,
  };

  return (
    <>
      <AppContext.Provider value={value}> {children} </AppContext.Provider>
    </>
  );
}
