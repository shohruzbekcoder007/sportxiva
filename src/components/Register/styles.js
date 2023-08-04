import {
  styled
} from "styled-components";


export const RegisterContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 900px) {
        display: block;
        flex-direction: column-reverse;
        gap: 30px;
        justify-content: center;
    }
`
export const RegisterTitle = styled.div `
    /* padding-top: 270px; */
    h1 {
        color: ${props => props.theme.color.color1};
        font-size: 56px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 72px;
    }
`
export const RegisterImage = styled.div `
    img {
      width: 450px;
      height: 450px;
      flex-shrink: 0;
      border-radius: 50%;
      object-fit: cover;
    }
`

export const RegisterInput = styled.input `
  width: 300px;
  height: 54px;
  border: 1px solid  ${props => props.theme.text.bg};
  border-radius: 5px;
  background-color:  ${props => props.theme.text.bg};
  outline: none;
  font-size: 20px;
  padding: 0 10px;
  color: gray;
`
export const BirthdayField = styled.input `
  width: 300px;
  height: 54px;
  border: 1px solid  ${props => props.theme.text.bg};
  border-radius: 5px;
  background-color:  white;
  outline: none;
  font-size: 20px;
  padding: 0 10px;
  color: gray;
`

export const RegisterGuest = styled.p `
color: ${props => props.theme.color.color1};
font-family: Nunito Sans;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

export const PhotoContaner = styled.div `
  padding-bottom: 150px;
`

export const RegisterRight = styled.div `
  width: 50%;
  @media (max-width: 900px) {
    width: 100%;
}
`

export const RegisterRightInputs = styled.div `
 display: flex; 
 justify-content: space-between; 
 margin: 16px 0; 
  @media (max-width: 698px) {
    display: grid;
    place-items: center;
    justify-content: center;
}
`

export const RegisterRightBtn = styled.div `
 display: flex; 
 justify-content: space-around; 
 margin: 80px 0; 
 button {
   font-size: 18px !important;
  }
  @media (max-width: 698px) {
    display: grid;
    place-items: center;
    justify-content: center;
    gap: 20px;
    button {
      padding: 10px;
    }
}
`

export const RegWrapper = styled.div`
  padding-top: 250px;
`