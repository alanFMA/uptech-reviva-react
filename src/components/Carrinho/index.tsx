import { ProductList } from "../ProductList";

export const Carrinho = () => {
  return (
    <>
      <div className="carrinho__grid">
        <div className="carrinho__grid__imagem">
          <img src="img/carrinho/camisa.png" alt="" />
        </div>
        <div className="carrinho__grid__info">
          <p className="carrinho__grid__titulo">Produto</p>
          <p>Camiseta K2K, preta</p>
        </div>
        <div className="carrinho__grid__tamanho">
          <p className="carrinho__grid__titulo">Tamanho Escolhido</p>
          <fieldset className="carrinho__grid__tamanho__select">
            <input type="radio" name="tamanho5" id="p5" />
            <button className="carrinho__tamanho__botao">
              <label htmlFor="p5">P</label>
            </button>
            <input type="radio" name="tamanho5" id="m5" />
            <button className="carrinho__tamanho__botao">
              <label htmlFor="m5">M</label>
            </button>
            <input type="radio" name="tamanho5" id="g5" />
            <button className="carrinho__tamanho__botao">
              <label htmlFor="g5">G</label>
            </button>
          </fieldset>
        </div>
        <div className="carrinho__valor">
          <p className="carrinho__grid__titulo">Valor</p>
          <p className="carrinho__grid__valor">R$ 39,00</p>
        </div>
        <div className="carrinho__quantidade">
          <p className="carrinho__grid__titulo">Quantidade</p>
          <input type="number" name="qtd" id="qtd" value="1" min="1" />
        </div>
        <div className="subtotal">
          <p className="carrinho__grid__titulo">Subtotal</p>
          <p className="carrinho__grid__valor">R$ 39,99</p>
        </div>
      </div>
      <div className="total">
        <p className="total__titulo">Total</p>
        <p>R$ 159,70</p>
        <p>1 x 39,90</p>
        <p>=</p>
        <p>39,90</p>
        <p>2 x 59,90</p>
        <p>=</p>
        <p>119,80</p>
        <button className="total__botao">Ir para pagamento</button>
      </div>
    </>
  );
};
