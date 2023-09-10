import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [pageId, setPageId] = useState(null);

  function sidebarOpen() {
    setIsSidebarOpen(true);
  }

  function sidebarClose() {
    setIsSidebarOpen(false);
  }

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, sidebarOpen, sidebarClose, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
