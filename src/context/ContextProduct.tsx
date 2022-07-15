import { createContext, ReactNode, useEffect, useState } from "react";
import { dataProduct } from "../data/dataProduct";
import { IProduto } from "mocks/interface"

interface ContextDataProductProviderProps {
  dataProductValue: IProduto[];
  setDataProductValue: React.Dispatch<React.SetStateAction<IProduto[]>>;
}

interface ChildrenProps {
  children: ReactNode
}

export const ContextDataProduct = createContext({} as ContextDataProductProviderProps);

export const ContextDataProductProvider = ({children}:ChildrenProps) => {
  const [dataProductValue, setDataProductValue] = useState(dataProduct);
  
  useEffect(() => {
    setDataProductValue(dataProduct);
  }, []);

  return (
    <ContextDataProduct.Provider value={{dataProductValue, setDataProductValue}}>
      {children}
    </ContextDataProduct.Provider>
  );
};