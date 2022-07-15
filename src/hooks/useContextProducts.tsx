import { useContext } from "react";
import { ContextDataProduct } from "context/ContextProduct";

export const useContextDataProduct = () => {
  const context = useContext(ContextDataProduct);
  return context;
}