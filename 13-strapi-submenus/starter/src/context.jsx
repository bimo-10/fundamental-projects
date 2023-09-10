import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function sidebarOpen() {
    setIsSidebarOpen(true);
  }

  function sidebarClose() {
    setIsSidebarOpen(false);
  }

  return (
    <AppContext.Provider value={{ isSidebarOpen, sidebarOpen, sidebarClose }}>
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
