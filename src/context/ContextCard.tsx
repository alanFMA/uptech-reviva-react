import { createContext, ReactNode, useEffect, useState } from "react";
import { ICarrinhoProduto } from 'mocks/interface'
import { dataCart } from 'data/dataCart'

interface ContextDataCartProviderProps {
  dataCartValue: ICarrinhoProduto[];
  setDataCartValue: React.Dispatch<React.SetStateAction<ICarrinhoProduto[]>>;
}

interface ChildrenProps {
  children: ReactNode
}

export const ContextDataCart = createContext({} as ContextDataCartProviderProps);

export const ContextDataCartProvider = ({children}:ChildrenProps) => {
  const [dataCartValue, setDataCartValue] = useState(dataCart);

  return (
    <ContextDataCart.Provider value={{dataCartValue, setDataCartValue}}>
      {children}
    </ContextDataCart.Provider>
  );
};