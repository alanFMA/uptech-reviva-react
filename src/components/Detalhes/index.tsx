
import { useRecoilValue } from "recoil";
import { productsListState } from "store/products";
import { BagDetails, BagDetailsEmpty, Box, BoxDetails, BoxDetailsImage, BoxDetailsImages, BoxDetailsImageSize, BoxDetailsImagesSizeButton, BoxDetailsInfo, BoxDetailsInfoTitle } from "./styles"


interface DetailsProductProps {
  produtoId: string;
}

export const DetailProduct = ({produtoId}: DetailsProductProps) => {
  // eslint-disable-next-line eqeqeq
  const produto = useRecoilValue(productsListState).find((produto) => `${produto.id}` == produtoId);
  return (
     <Box>
      <BoxDetails>
       <BoxDetailsImage>
       <img src={produto?.imagens[0].url} alt={produto?.imagens[0].descricao} />
       </BoxDetailsImage>
     <BoxDetailsInfo>
         <BoxDetailsInfoTitle>{produto?.nome}</BoxDetailsInfoTitle>
         <p>{produto?.descricao}</p>
       </BoxDetailsInfo>
       <BoxDetailsImages>
       <img src={produto?.imagens[1].url} alt={produto?.imagens[1].descricao} />
       <img src={produto?.imagens[2].url} alt={produto?.imagens[2].descricao} />
       <img src={produto?.imagens[3].url} alt={produto?.imagens[3].descricao} />
       <img src={produto?.imagens[4].url} alt={produto?.imagens[4].descricao} />
       </BoxDetailsImages>
       <BoxDetailsImageSize>
         <input type="radio" name="detail" id="p1" />
         <BoxDetailsImagesSizeButton>
           <label htmlFor="p1">P</label>
         </BoxDetailsImagesSizeButton>
         <input type="radio" name="detail" id="m1" />
         <BoxDetailsImagesSizeButton>
           <label htmlFor="m1">M</label>
         </BoxDetailsImagesSizeButton>
         <input type="radio" name="detail" id="g1" />
         <BoxDetailsImagesSizeButton>
           <label htmlFor="g1">G</label>
         </BoxDetailsImagesSizeButton>
       </BoxDetailsImageSize>
       <BagDetails>
         <BagDetailsEmpty></BagDetailsEmpty>
       </BagDetails>
       </BoxDetails>
     </Box>
  )
}