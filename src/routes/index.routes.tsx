import { Cart } from "pages/Cart";
import { Details } from "pages/Details";
import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";

export const RoutesApp = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/details/:produtoId" element={<Details/>} />
    </Routes>
    </>
  )
}