import { useState } from 'react';
import Nav from '../Nav'



const Header: React.FC = () => {
  const [menuAtivo, setmenuAtivo] = useState(false);
  return (
  <>  
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
    <Nav menuAtivo={menuAtivo} />
  </>
  )
}
     
export default Header