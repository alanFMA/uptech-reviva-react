/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { IProduto, produtosInitial } from "../../mocks/estoque";
import { ICarrinhoProduto } from "../../mocks/estoque";
import "./index.scss";

function Home() {
  const [menuAtivo, setmenuAtivo] = useState(false);

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
    <div>
      <header>
        <div className="cabecalho">
          <div className="cabecalho__responsivo">
            <div
              onClick={() => setmenuAtivo((prevState) => !prevState)}
              className="navMenu"
            >
              <span className="navMenu__hamburguer"></span>
            </div>
            <div className="cabecalho__marca">
              <h1 className="cabecalho__marca__titulo">Reviva Fashion</h1>
              <p className="cabecalho__marca__paragrafo">by RCHLO</p>
            </div>
            <a href="carrinho.html" className="cabecalho__carrinho">
              <img
                src={process.env.PUBLIC_URL + "./images/header/sacola2.png"}
                alt=""
              />
            </a>
          </div>
        </div>
      </header>
      <nav className={`menu ${menuAtivo ? "menu--ativo" : ""}`}>
        <ul className="menu__link">
          <li>
            <a className="menu__link__item" href="index.html">
              Página Inicial
            </a>
          </li>
          <li>
            <a className="menu__link__item" href="#">
              Moda Masculina
            </a>
          </li>
          <li>
            <a className="menu__link__item" href="#">
              Moda Feminina
            </a>
          </li>
          <li>
            <a className="menu__link__item" href="#">
              Moda Infantil
            </a>
          </li>
          <li>
            <a className="menu__link__item" href="#">
              Manual de Moda
            </a>
          </li>
        </ul>
      </nav>
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
          <h2>Últimos lançamentos</h2>
          <div id="ultimos-lancamentos" className="vestuario__grid">
            {produtosInitial
              .filter((produto) => {
                if (produto.categoria === "lancamentos") {
                  return produto;
                }
              })
              .map((produto, indice) => (
                <div key={produto.id} className="vestuario__grid__item">
                  <div className="produto">
                    <a href="detalhes.html">
                      <img
                        src={produto.imagens[0].url}
                        className="produto__imagem"
                        alt="Camisa"
                      />
                    </a>
                    <fieldset className="produto__imagem__tamanho">
                      <input
                        type="radio"
                        name={`tamanho${indice}`}
                        id={`p${indice}`}
                      />
                      <button className="produto__imagem__tamanho__botao">
                        <label htmlFor={`p${indice}`}>P</label>
                      </button>
                      <input
                        type="radio"
                        name={`tamanho${indice}`}
                        id={`m${indice}`}
                      />
                      <button className="produto__imagem__tamanho__botao">
                        <label htmlFor={`m${indice}`}>M</label>
                      </button>
                      <input
                        type="radio"
                        name={`tamanho${indice}`}
                        id={`g${indice}`}
                      />
                      <button className="produto__imagem__tamanho__botao">
                        <label htmlFor={`g${indice}`}>G</label>
                      </button>
                    </fieldset>
                  </div>
                  <p className="produto__imagem__descricao">{produto.nome}</p>
                  <p className="produto__imagem__preco">{produto.preco}</p>
                  <div onClick={() => addCarrinho(produto.id)} className="container__botao">
                    <div className="botao__flip">
                      <div className="botao__flip__sacola">
                        <div className="botao__sacola__vazio"></div>
                        <p className="botao__sacola__texto">POR NA SACOLA</p>
                        <img
                          src={process.env.PUBLIC_URL + "./images/shop.png"}
                          className="botao__sacola__imagem"
                          alt=""
                        />
                      </div>
                      <div className="botao__flip__checked">
                        <div className="botao__sacola__vazio"></div>
                        <img
                          src={
                            process.env.PUBLIC_URL + "./images/check-img.png"
                          }
                          alt=""
                        />
                        <div className="botao__sacola__vazio"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        <section className="manual">
          <div className="manual__vazio"></div>
          <div className="manual__paragrafo">
            <p className="manual__paragrafo__junto">
              Fique por dentro de tudo que há de novidade no mundo da moda!
            </p>
            <p className="manual__paragrafo__espacado">
              Baixe já o nosso manual de moda!
            </p>
          </div>
          <div className="manual__marca">
            <h3 className="manual__marca__titulo">Reviva Fashion</h3>
            <p className="manual__marca__paragrafo">by RCHLO</p>
          </div>
        </section>

        <section className="vestuario">
          <h2>Coleção de verão</h2>
          <div className="vestuario__grid">
            {produtosInitial
              .filter((produto) => {
                if (produto.categoria === "verao") {
                  return produto;
                }
              })
              .map((produto, indice) => (
                <div key={produto.id} className="vestuario__grid__item">
                  <div className="produto">
                    <a href="detalhes.html">
                      <img
                        src={produto.imagens[0].url}
                        className="produto__imagem"
                        alt="Camisa"
                      />
                    </a>
                    <fieldset className="produto__imagem__tamanho">
                      <input
                        type="radio"
                        name={`tamanho${indice}`}
                        id={`p${indice}`}
                      />
                      <button className="produto__imagem__tamanho__botao">
                        <label htmlFor={`p${indice}`}>P</label>
                      </button>
                      <input
                        type="radio"
                        name={`tamanho${indice}`}
                        id={`m${indice}`}
                      />
                      <button className="produto__imagem__tamanho__botao">
                        <label htmlFor={`m${indice}`}>M</label>
                      </button>
                      <input
                        type="radio"
                        name={`tamanho${indice}`}
                        id={`g${indice}`}
                      />
                      <button className="produto__imagem__tamanho__botao">
                        <label htmlFor={`g${indice}`}>G</label>
                      </button>
                    </fieldset>
                  </div>
                  <p className="produto__imagem__descricao">{produto.nome}</p>
                  <p className="produto__imagem__preco">{produto.preco}</p>
                  <div onClick={() => addCarrinho(produto.id)} className="container__botao">
                    <div className="botao__flip">
                      <div className="botao__flip__sacola">
                        <div className="botao__sacola__vazio"></div>
                        <p className="botao__sacola__texto">POR NA SACOLA</p>
                        <img
                          src={process.env.PUBLIC_URL + "./images/shop.png"}
                          className="botao__sacola__imagem"
                          alt=""
                        />
                      </div>
                      <div className="botao__flip__checked">
                        <div className="botao__sacola__vazio"></div>
                        <img
                          src={
                            process.env.PUBLIC_URL + "./images/check-img.png"
                          }
                          alt=""
                        />
                        <div className="botao__sacola__vazio"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
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
      <footer className="rodape">
        <div className="rodape__box">
          <div className="rodape__marca">
            <h3 className="rodape__marca__titulo">Reviva Fashion</h3>
            <p className="rodape__marca__paragrafo">by RCHLO</p>
          </div>
          <div className="rodape__menu">
            <ul className="rodape__menu__lista">
              <p className="rodape__subtitulo">Menu</p>
              <li>
                <a href="#" className="rodape__menu__item">
                  Página Inicial
                </a>
              </li>
              <li>
                <a href="#" className="rodape__menu__item">
                  Moda Masculina
                </a>
              </li>
              <li>
                <a href="#" className="rodape__menu__item">
                  Moda Feminina
                </a>
              </li>
              <li>
                <a href="#" className="rodape__menu__item">
                  Moda Infantil
                </a>
              </li>
            </ul>
          </div>
          <div className="redes-sociais">
            <p className="rodape__subtitulo">Siga-nos nas redes sociais</p>
            <div className="redes-sociais__icones">
              <img
                src={process.env.PUBLIC_URL + "./images/socials/face.svg"}
                className="redes-sociais__icones__item"
                alt="face"
              />
              <img
                src={process.env.PUBLIC_URL + "./images/socials/twitter.svg"}
                className="redes-sociais__icones__item"
                alt="twitter"
              />
              <img
                src={process.env.PUBLIC_URL + "./images/socials/insta.svg"}
                className="redes-sociais__icones__item"
                alt="insta"
              />
              <img
                src={process.env.PUBLIC_URL + "./images/socials/youtube.svg"}
                className="redes-sociais__icones__item"
                alt="youtube"
              />
            </div>
          </div>
          <div className="contato">
            <p className="rodape__subtitulo">Entre em contato</p>
            <p>Contato</p>
            <a href="mailto:reviva@rchlo.com.br">reviva@rchlo.com.br</a>
            <p>
              Whatsapp{" "}
              <img
                src={process.env.PUBLIC_URL + "./images/socials/whatsapp.svg"}
                alt=""
              />
            </p>
            <p>
              11 2123-3321{" "}
              <img
                src={process.env.PUBLIC_URL + "./images/socials/phone.svg"}
                alt=""
              />
            </p>
          </div>
          <div className="newsletter">
            <p className="rodape__subtitulo">Assine nossa newsletter</p>
            <input type="text" name="newsletter" id="newsletter" />
            <button id="newsletter">ASSINAR JÁ</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home