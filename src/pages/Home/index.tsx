/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Footer } from "components/Footer";
import Header from "components/Header";
import { Manual } from "components/Manual";
import { ProductList } from "components/ProductList";
import { useRecoilValue } from "recoil";
import "./index.scss";
import { productsListState } from "store/products";



export function Home() {
  const productList = useRecoilValue(productsListState);
  const productList1 = productList.filter(produto => produto.categoria === "lancamentos")
  const productList2 = productList.filter(produto => produto.categoria === "verao")
  return (
    <div>
     <Header />
      <div className="busca">
        <input
          type="search" 
          name="busca__input"
          className="busca__input"
          placeholder="Faça sua busca aqui se já souber o que está procurando..."
        />
        <button className="busca__botao">
          <img
            src={process.env.PUBLIC_URL + "./images/lupa.svg"}
            id="btnBusca"
            className="busca__botao__lupa"
            alt="Buscar"
          />
        </button>
      </div>
      <main className="principal">
        <section className="vestuario">
        <ProductList title='Últimos Lançamentos' products={productList1} />
        </section>

        <Manual />

        <section className="vestuario">
        <ProductList title='Coleção de Verão' products={productList2} />  
        </section>

        <section className="blog">
          <h2>
            Na dúvida como combinar suas roupas e ficar incrível?
            <br />
            Confira as dicas em nosso blog
          </h2>
          <div className="blog__item">
            <div className="blog__item__maior">
              <img
                className="blog__item__maior__imagem"
                src={process.env.PUBLIC_URL + "./images/blog/bloggirls.jpg"}
                alt="exemplo"
              />
              <p className="grid__blog__item__maior__texto">
                Estilo casual: Como se vestir bem e estar na moda, acompanhando
                as mais recentes tendências do estilo.
              </p>
            </div>
            <div className="blog__item__duplo">
              <div className="blog__item__duplo1">
                <picture>
                  <source
                    media="(max-width: 576px)"
                    srcSet={
                      process.env.PUBLIC_URL + "./images/blog/blogmensg.jpg"
                    }
                    type="image/jpeg"
                  />
                  <img
                    className="blog__item__duplo1__imagem1"
                    src={process.env.PUBLIC_URL + "./images/blog/blogmens.jpg"}
                    alt="exemplo"
                  />
                </picture>
                <p className="blog__item__duplo1__texto1">
                  Cores e Tecidos: Você sabe como combinar cores e tecidos de
                  roupas? Veja mais no nosso blog!
                </p>
              </div>
              <div className="blog__item__duplo2">
                <picture>
                  <source
                    media="(max-width: 576px)"
                    srcSet={
                      process.env.PUBLIC_URL + "./images/blog/blogcarnavalg.jpg"
                    }
                    type="image/jpeg"
                  />
                  <img
                    className="blog__item__duplo2__imagem2"
                    src={
                      process.env.PUBLIC_URL + "./images/blog/blogcarnaval.jpg"
                    }
                    alt="exemplo"
                  />
                </picture>
                <p className="blog__item__duplo2__texto2">
                  O que fazer com o look que usou no carnaval? Confira já como
                  fazer uso dessas mesmas peças no inverno e continuar na moda!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home