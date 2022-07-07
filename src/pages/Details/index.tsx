import Header from "components/Header";
import { Footer } from "components/Footer";
import { DetailProduct } from "components/Detalhes";
import { useParams } from "react-router-dom";

export const Details = () => {
  const {produtoId} = useParams()
  return (
    <>
    <Header />
    <DetailProduct produtoId = {`${produtoId}`} />
    <Footer />
    </>
  )
}