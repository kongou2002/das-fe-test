import React, { createContext, useState, ReactNode } from "react";
import { IData } from "../interface/data";
import { mockData } from "../mock-data/mockData";

interface IDataContext {
  data: IData[];
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
  deleteData: (id: number) => void;
}

export const DataContext = createContext<IDataContext>({
  data: [],
  setData: () => {},
  deleteData: () => {},
});

const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<IData[]>(mockData);

  const deleteData = (id: number) => {
    console.log(id);
    setData(data.filter((item) => item.CustomerID !== id));
  };

  return (
    <DataContext.Provider value={{ data, setData, deleteData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
