/* eslint-disable jsx-a11y/anchor-is-valid */
interface IProps {
  menuAtivo: boolean;
}

const Nav: React.FC <IProps> = ({menuAtivo}: IProps) => {
  return (
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
  )
}

export default Nav
