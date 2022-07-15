import styled from "styled-components";

export const Box = styled.main `
  width: 75vw;
  font-size: 1.5rem;
  margin: 0 auto;
`

export const BoxDetails = styled.div `
  display: grid;
  margin: 5rem auto;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  width: 100%; 
`

export const BoxDetailsImage = styled.div `
  width: 100%;
  grid-row: span 4;
  img {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    grid-column: span 3;
  }
`

export const BoxDetailsInfo = styled.div`
  grid-column: span 2;
  @media only screen and (max-width: 768px) {
    grid-area: 5;
    grid-column: span 3;
  }
`

export const BoxDetailsInfoTitle = styled.p `
  font-size: 1.7rem;
  font-weight: bold;
  margin-bottom: 1.25rem;
`

export const BoxDetailsImages = styled.div `
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1rem 1rem 1rem 0;
  grid-column: span 2;
  img {
  width: 108px;
  height: 108px;
  margin-bottom: 1rem;
  margin-right: 1rem;
  }
  @media only screen and (max-width: 992px) {
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 768px) {
    grid-area: 6;
    grid-column: span 3;
    justify-content: space-between;
    img {
      margin-right: 0;
    }
  }
  @media only screen and (max-width: 576px) {
    margin-right: 1rem;
  }
`
export const BoxDetailsImageSize = styled.fieldset `
  align-self: flex-end;
  grid-column: span 2;
  input[type=radio] {
    display: none;
    :checked {
      background-color: #487680;
      color: white;
      font-weight: bold;
    }
  }
  @media only screen and (max-width: 992px) {
    grid-column: span 1;
  }
  @media only screen and (max-width: 768px) {
    grid-area: 7;
    grid-column: span 3;
  }
  @media only screen and (max-width: 576px) {
    grid-column: span 2;
  }
`

// export const BoxDetailsImageSizeInput = styled.input `
//   [type=radio] {
//     display: none;
//     :checked {
//       background-color: #487680;
//       color: white;
//       font-weight: bold;
//     }
//   }
// `

export const BoxDetailsImagesSizeButton = styled.button `
  font-size: 1.5rem;
  margin: 0 0.576rem 0.313rem 0;
  padding: 0.313rem 0.576rem;
  border: 1px solid #bbb;
`

export const BagDetails = styled.button `
  margin-top: 1.25rem;
  width: 200px;
  height: 10vh;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #487680;
  color: #EFF2F7;
  border: none;
  border-radius: 5px;
  @media only screen and (max-width: 768px) {
    grid-area: 8;
    grid-column: span 3;
  }
`

export const BagDetailsEmpty = styled.div `
  width: 24px;
  height: 24px;
`


