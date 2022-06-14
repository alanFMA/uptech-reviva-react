import { useState } from 'react';
import Nav from '../Nav';
import styles from './Header.module.scss'



const Header: React.FC = () => {
  const [menuAtivo, setmenuAtivo] = useState(false);
  return (
  <>  
    <header>
    <div className={styles.cabecalho}>
      <div className={styles.cabecalho__responsivo}>
        <div
          onClick={() => setmenuAtivo((prevState) => !prevState)}
          className={styles.navMenu}
        >
          <span className={styles.navMenu__hamburguer}></span>
        </div>
        <div className={styles.cabecalho__marca}>
          <h1 className={styles.cabecalho__marca__titulo}>Reviva Fashion</h1>
          <p className={styles.cabecalho__marca__paragrafo}>by RCHLO</p>
        </div>
        <a href="carrinho.html" className={styles.cabecalho__carrinho}>
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