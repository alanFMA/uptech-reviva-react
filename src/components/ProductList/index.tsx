
import { useEffect } from "react";
import { ICarrinhoProduto, IProduto, produtosInitial } from "../../mocks/estoque";
import styles from './ProductList.module.scss';

interface ProductListProps {
  title: string;
  products: IProduto[]
}


export const ProductList = ({title, products}: ProductListProps) => {
  useEffect(() => {
    //Storage do Produto
    const estoqueTemp = localStorage.getItem("Produtos");

    if (!estoqueTemp) {
      localStorage.setItem("Produtos", JSON.stringify(produtosInitial));
    }

    //Storage do Carrinho
    const carrinhoTemp = localStorage.getItem("Carrinho");

    if (!carrinhoTemp) {
      localStorage.setItem("Carrinho", JSON.stringify([]));
    }
  }, []);

  const addCarrinho = function (id: number) {
    const produtosTemp = JSON.parse(
      localStorage.getItem("Produtos") as string
    ) as IProduto[];
    const carrinhoTemp = JSON.parse(
      localStorage.getItem("Carrinho") as string
    ) as ICarrinhoProduto[];
  
    const produto = produtosTemp.find((produto: IProduto):Boolean => {
      return produto.id === id;
    });
  
    if (produto && produto.quantidade_disponivel > 0) {
      const produtoCarrinho = carrinhoTemp.find((produto: ICarrinhoProduto) => {
        return produto.id === id;
      });
  
      if (produtoCarrinho) {
        produtoCarrinho.quantidade++;
      } else {
        const produtoParaAdicionar: ICarrinhoProduto = {
          id: produto.id,
          nome: produto.nome,
          preco: produto.preco,
          quantidade: 1,
          imagem: produto.imagens
        };
        carrinhoTemp.push(produtoParaAdicionar);
      }
      localStorage.setItem(
        "Carrinho",
        JSON.stringify(carrinhoTemp)
      );
      console.table(carrinhoTemp);
  
      //Remover do estoque
      produto.quantidade_disponivel--;
      localStorage.setItem(
        "Produtos",
        JSON.stringify(produtosTemp)
      );
    } else {
      alert("Produto sem estoque");
    }
  console.table(produtosTemp)
  }
  return (
    <>
    <h2>{title}</h2>
    <div id={title} className={styles.vestuario__grid}>
            {products
              .map((produto, indice) => (
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
                  <div onClick={() => addCarrinho(produto.id)} className={styles.container__botao}>
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
                          src={
                            process.env.PUBLIC_URL + "./images/check-img.png"
                          }
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
  )
}