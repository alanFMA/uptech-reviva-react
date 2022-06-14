/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames';
import styles from './Nav.module.scss'

interface IProps {
  menuAtivo: boolean;
}

const Nav: React.FC <IProps> = ({menuAtivo}: IProps) => {
  return (
    <nav className={classNames({
      [styles.menu]: true,
      [styles["menu--ativo"]]: menuAtivo
    })}>
    <ul className={styles.menu__link}>
        <li>
            <a className={styles.menu__link__item} href="index.html">
              Página Inicial
            </a>
          </li>
          <li>
            <a className={styles.menu__link__item} href="#">
              Moda Masculina
            </a>
          </li>
          <li>
            <a className={styles.menu__link__item} href="#">
              Moda Feminina
            </a>
          </li>
          <li>
            <a className={styles.menu__link__item} href="#">
              Moda Infantil
            </a>
          </li>
          <li>
            <a className={styles.menu__link__item} href="#">
              Manual de Moda
            </a>
          </li>
    </ul>
</nav>
  )
}

export default Nav
