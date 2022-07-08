/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Footer.module.scss'
import FaceIcon from 'assets/img/face.svg'
import TwitterIcon  from 'assets/img/twitter.svg'
import YoutubeIcon  from 'assets/img/youtube.svg'
import InstagramIcon  from 'assets/img/insta.svg'
import WhatsappIcon  from 'assets/img/whatsapp.svg'
import PhoneIcon  from 'assets/img/phone.svg'

export const Footer = () => {
  return (
    <footer className={styles.rodape}>
        <div className={styles.rodape__box}>
          <div className={styles.rodape__marca}>
            <h3 className={styles.rodape__marca__titulo}>Reviva Fashion</h3>
            <p className={styles.rodape__marca__paragrafo}>by RCHLO</p>
          </div>
          <div className={styles.rodape__menu}>
            <ul className={styles.rodape__menu__lista}>
              <p className={styles.rodape__subtitulo}>Menu</p>
              <li>
                <a href="#" className={styles.rodape__menu__item}>
                  Página Inicial
                </a>
              </li>
              <li>
                <a href="#" className={styles.rodape__menu__item}>
                  Moda Masculina
                </a>
              </li>
              <li>
                <a href="#" className={styles.rodape__menu__item}>
                  Moda Feminina
                </a>
              </li>
              <li>
                <a href="#" className={styles.rodape__menu__item}>
                  Moda Infantil
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["redes-sociais"]}>
            <p className={styles.rodape__subtitulo}>Siga-nos nas redes sociais</p>
            <div className={styles["redes-sociais__icones"]}>
              <img
                src={FaceIcon}
                className={styles["redes-sociais__icones__item"]}
                alt="face"
              />
              <img
                src={TwitterIcon}
                className={styles["redes-sociais__icones__item"]}
                alt="twitter"
              />
              <img
                src={InstagramIcon}
                className={styles["redes-sociais__icones__item"]}
                alt="insta"
              />
              <img
                src={YoutubeIcon}
                className={styles["redes-sociais__icones__item"]}
                alt="youtube"
              />
            </div>
          </div>
          <div className={styles.contato}>
            <p className={styles.rodape__subtitulo}>Entre em contato</p>
            <p>Contato</p>
            <a href="mailto:reviva@rchlo.com.br">reviva@rchlo.com.br</a>
            <p>
              Whatsapp{" "}
              <img
                src={WhatsappIcon}
                alt=""
              />
            </p>
            <p>
              11 2123-3321{" "}
              <img
                src={PhoneIcon}
                alt=""
              />
            </p>
          </div>
          <div className={styles.newsletter}>
            <p className={styles.rodape__subtitulo}>Assine nossa newsletter</p>
            <input type="text" name="newsletter" id="newsletter" />
            <button id="newsletter">ASSINAR JÁ</button>
          </div>
        </div>
      </footer>
  )
}