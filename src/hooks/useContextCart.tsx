import { useContext } from "react";
import { ContextDataCart } from "context/ContextCard";

export const useContextDataCart = () => {
  const context = useContext(ContextDataCart);
  return context;
}