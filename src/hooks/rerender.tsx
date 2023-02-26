import React, { useContext, useState } from "react";

// Define the context with default values
interface AppContextInterface {
  reRender: boolean;
  setReRender: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = React.createContext<AppContextInterface>({
  reRender: false,
  setReRender: () => {},
});

// Define the provider component to wrap the app with the context
const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reRender, setReRender] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ reRender, setReRender }}>
      {children}
    </AppContext.Provider>
  );
};

// Define a custom hook to access the context
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
