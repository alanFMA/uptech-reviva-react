import { render } from "@testing-library/react";
import { ContextDataCart } from "context/ContextCard";
import { dataProduct } from "data/dataProduct";
import { useState } from "react";
import { Carrinho } from ".";

const Component = (props: any) => {
  const [dataCartValue, setDataCartValue] = useState(props.products);
  return (
    <ContextDataCart.Provider value={{ dataCartValue, setDataCartValue }}>
      <Carrinho />
    </ContextDataCart.Provider>
  );
};

const makeSut = (props: any) => {
  return render(<Component {...props} />);
};
describe("Carrinho", () => {
  test("Renderizar listagem de produtos", () => {
    const { container } = makeSut({
      products: dataProduct.map((product) => ({
        ...product,
        imagem: product.imagens,
      })),
    });
    expect(container).toMatchSnapshot("listagem de produtos");
  });
});
