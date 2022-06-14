import { IProduto, produtosInitial } from "../../mocks/estoque";
import styles from './Carrinho.module.scss';


// interface ProductCarrinhoProps {
//   title: string,
//   products: IProduto[]
// }

export const Carrinho = () => {
  return (
    <>
    <main className={styles.principal}>
    <h2>Minha sacola</h2>
    <div className={styles.box}>
      <div className={styles.carrinho__grid}>
        <div className={styles.carrinho__grid__imagem}>
          <img src={process.env.PUBLIC_URL + "./images/blog/blogmens.jpg"} alt="" />
        </div>
        <div className={styles.carrinho__grid__info}>
          <p className={styles.carrinho__grid__titulo}>Produto</p>
          <p>Moletom</p>
        </div>
        <div className={styles.carrinho__grid__tamanho}>
          <p className={styles.carrinho__grid__titulo}>Tamanho Escolhido</p>
          <fieldset className={styles.carrinho__grid__tamanho__select}>
            <input type="radio" name="tamanho5" id="p5" />
            <button className={styles.carrinho__tamanho__botao}>
              <label htmlFor="p5">P</label>
            </button>
            <input type="radio" name="tamanho5" id="m5" />
            <button className={styles.carrinho__tamanho__botao}>
              <label htmlFor="m5">M</label>
            </button>
            <input type="radio" name="tamanho5" id="g5" />
            <button className={styles.carrinho__tamanho__botao}>
              <label htmlFor="g5">G</label>
            </button>
          </fieldset>
        </div>
        <div className={styles.carrinho__valor}>
          <p className={styles.carrinho__grid__titulo}>Valor</p>
          <p className={styles.carrinho__grid__valor}>R$ 39,00</p>
        </div>
        <div className={styles.carrinho__quantidade}>
          <p className={styles.carrinho__grid__titulo}>Quantidade</p>
          <input type="number" name="qtd" id="qtd" value="1" min="1" />
        </div>
        <div className={styles.subtotal}>
          <p className={styles.carrinho__grid__titulo}>Subtotal</p>
          <p className={styles.carrinho__grid__valor}>R$ 39,99</p>
        </div>
      </div>
      <div className={styles.total}>
        <p className={styles.total__titulo}>Total</p>
        <p>R$ 159,70</p>
        <p>1 x 39,90</p>
        <p>=</p>
        <p>39,90</p>
        <p>2 x 59,90</p>
        <p>=</p>
        <p>119,80</p>
        <button className={styles.total__botao}>Ir para pagamento</button>
      </div>
    </div>
  </main>
    </>
  );
};
