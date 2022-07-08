import { useState } from 'react';
import Nav from '../Nav';
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';
import SacolaIcon from 'assets/img/sacola2.png'



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
        <Link to={"/cart"} className={styles.cabecalho__carrinho}>
          <img
            src={SacolaIcon}
            alt=""
          />
        </Link>
      </div>
    </div>
    </header>
    <Nav menuAtivo={menuAtivo} />
  </>
  )
}
     
export default Header