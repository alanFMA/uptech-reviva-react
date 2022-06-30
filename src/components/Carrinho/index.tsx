import styles from './Carrinho.module.scss';
import { cart } from 'store/cart';
import { useRecoilState } from 'recoil';



export const Carrinho = () => {
  const [cartAtual, setCartAtual] = useRecoilState(cart)

  const onChangeFunc = (e: any) => {
    cartAtual.forEach((item, x) => {
      // eslint-disable-next-line eqeqeq
      if(item.id == e.target.id){
        let object = {...item};
        object.quantidade = Number.parseInt(e.target.value);
        const pos = x;
        const newArray = [...cartAtual];
        newArray[pos] = object;
        setCartAtual(newArray);
        console.log('atualizou')
      }
    });

  }

  return (
    <>
    <main className={styles.principal}>
    <h2>Minha sacola</h2>
    <div className={styles.box}>
      {cartAtual.map((product) => (
        <div>
          <div className={styles.carrinho__grid}>
            <div className={styles.carrinho__grid__imagem}>
              <img src={product.imagem[0].url} alt="" />
            </div>
            <div className={styles.carrinho__grid__info}>
            <p className={styles.carrinho__grid__titulo}>Produto</p>
            <p>{product.nome}</p>
            </div>
            <div className={styles.carrinho__grid__tamanho}>
              <p className={styles.carrinho__grid__titulo}>Tamanho Escolhido</p>
              <fieldset className={styles.carrinho__grid__tamanho__select}>
                <input type="radio" name="tamanho5" id="p5" />
                <button className={styles.carrinho__tamanho__botao}>
                  <label htmlFor="p5">P</label>
               </button>
                <input type="radio" name="tamanho5" id="m5" />
                <button className={styles.carrinho__tamanho__botao}>
                  <label htmlFor="m5">M</label>
                </button>
               <input type="radio" name="tamanho5" id="g5" />
                <button className={styles.carrinho__tamanho__botao}>
                  <label htmlFor="g5">G</label>
                </button>
              </fieldset>
            </div>
            <div className={styles.carrinho__valor}>
             <p className={styles.carrinho__grid__titulo}>Valor</p>
              <p className={styles.carrinho__grid__valor}>{product.preco}</p>
           </div>
            <div className={styles.carrinho__quantidade}>
             <p className={styles.carrinho__grid__titulo}>Quantidade</p>
              <input type="number" name="qtd" id={""+product.id} value={product.quantidade} onChange={onChangeFunc} min="1" max="12"/>
            </div>
            <div className={styles.subtotal}>
              <p className={styles.carrinho__grid__titulo}>Subtotal</p>
              <p className={styles.carrinho__grid__valor}>{(product.quantidade * product.preco).toFixed(2)}</p>
            </div>
          </div>
        </div>
        ))}
        <div className={styles.total}>
            <p className={styles.total__titulo}>Total</p>
            <p className={styles.calc__total}>R$ {cartAtual.map(p => p.quantidade * p.preco).reduce((totalSum, a) => (totalSum + a), 0).toFixed(2)}</p>
            {cartAtual.map(prod => <p className={styles.calc__subtotal}>{prod.quantidade} x {prod.preco} = {Number((prod.quantidade * prod.preco).toFixed(2))}</p> )}

            <button className={styles.total__botao}>Ir para pagamento</button>
          </div>
      </div>
    </main>
    </>
  );
};