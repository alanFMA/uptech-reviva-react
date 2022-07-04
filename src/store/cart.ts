import { atom } from "recoil"
import { ICarrinhoProduto } from "../mocks/interface"



export const cart = atom({
  key: 'cart',
  default: [] as ICarrinhoProduto[]
})