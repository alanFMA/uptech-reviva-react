import styles from './Manual.module.scss'

export const Manual = () => {
  return (
    <section className={styles.manual}>
      <div className={styles.manual__vazio}></div>
      <div className={styles.manual__paragrafo}>
        <p className={styles.manual__paragrafo__junto}>
          Fique por dentro de tudo que há de novidade no mundo da moda!
        </p>
        <p className={styles.manual__paragrafo__espacado}>
          Baixe já o nosso manual de moda!
        </p>
      </div>
      <div className={styles.manual__marca}>
        <h3 className={styles.manual__marca__titulo}>Reviva Fashion</h3>
        <p className={styles.manual__marca__paragrafo}>by RCHLO</p>
      </div>
    </section>
  )
}