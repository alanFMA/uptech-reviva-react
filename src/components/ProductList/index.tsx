import { useRecoilState } from "recoil";
import { ICarrinhoProduto, IProduto } from "../../mocks/interface";
import { cart } from "../../store/cart";
import { productsListState } from "../../store/products";
import styles from "./ProductList.module.scss";

interface ProductListProps {
  title: string;
  products: IProduto[];
}

export const ProductList = ({ title, products }: ProductListProps) => {
  const [ carrinho, setCarrinho ] = useRecoilState(cart);
  const [ inventory, setInventory ] = useRecoilState(productsListState)

  const addCarrinho = function (product: IProduto) {
    if (product && product.quantidade_disponivel > 0) {
      const foundCarrinho = carrinho.findIndex((produto: ICarrinhoProduto) => {
        return produto.id === product.id;
      })
      const foundInventory = inventory.findIndex((productInventory: IProduto) => {
        return productInventory.id === product.id;
      })
      console.log(foundCarrinho);

      if (foundCarrinho >= 0) {
        let newCart = JSON.parse(JSON.stringify(carrinho));
        console.log(newCart)
        newCart[foundCarrinho].quantidade++;
        console.log('estou aqui');
        setCarrinho(newCart);
        
      } else {
        console.log('im else')
        const produtoParaAdicionar: ICarrinhoProduto = {
          id: product.id,
          nome: product.nome,
          preco: product.preco,
          quantidade: 1,
          imagem: product.imagens,
        };
        setCarrinho([...carrinho, produtoParaAdicionar])
      }
      let newInventory = JSON.parse(JSON.stringify(inventory));
      console.log(newInventory);
      newInventory[foundInventory].quantidade_disponivel--;
      setInventory(newInventory);
    } else {
      return window.alert('Produto não disponível')
    }
  };
  return (
    <>
      <h2>{title}</h2>
      <div id={title} className={styles.vestuario__grid}>
        {products.map((produto, indice) => (
          <div key={produto.id} className={styles.vestuario__grid__item}>
            <div className={styles.produto}>
              <a href="detalhes.html">
                <img
                  src={produto.imagens[0].url}
                  className={styles.produto__imagem}
                  alt="Camisa"
                />
              </a>
              <fieldset className={styles.produto__imagem__tamanho}>
                <input
                  type="radio"
                  name={`tamanho${indice}`}
                  id={`p${indice}`}
                />
                <button className={styles.produto__imagem__tamanho__botao}>
                  <label htmlFor={`p${indice}`}>P</label>
                </button>
                <input
                  type="radio"
                  name={`tamanho${indice}`}
                  id={`m${indice}`}
                />
                <button className={styles.produto__imagem__tamanho__botao}>
                  <label htmlFor={`m${indice}`}>M</label>
                </button>
                <input
                  type="radio"
                  name={`tamanho${indice}`}
                  id={`g${indice}`}
                />
                <button className={styles.produto__imagem__tamanho__botao}>
                  <label htmlFor={`g${indice}`}>G</label>
                </button>
              </fieldset>
            </div>
            <p className={styles.produto__imagem__descricao}>{produto.nome}</p>
            <p className="produto__imagem__preco">{produto.preco}</p>
            <div
              onClick={() => addCarrinho(produto)}
              className={styles.container__botao}
            >
              <div className={styles.botao__flip}>
                <div className={styles.botao__flip__sacola}>
                  <div className={styles.botao__sacola__vazio}></div>
                  <p className={styles.botao__sacola__texto}>POR NA SACOLA</p>
                  <img
                    src={process.env.PUBLIC_URL + "./images/shop.png"}
                    className={styles.botao__sacola__imagem}
                    alt=""
                  />
                </div>
                <div className={styles.botao__flip__checked}>
                  <div className={styles.botao__sacola__vazio}></div>
                  <img
                    src={process.env.PUBLIC_URL + "./images/check-img.png"}
                    alt=""
                  />
                  <div className={styles.botao__sacola__vazio}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
