import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 25px;
    background-image: linear-gradient( to bottom, #F4F4F4, #D6D6D6, #B9B9B9, #9C9C9C, #7F7F7F, #626262, #454545);
    background-repeat: space;
    background-position: center;
    background-size: cover;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-family: 'Rubik', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;


const TituloLogo = styled.h1`
  font-size: 35px;
  color: #14131A;
  font-weight: bold;
  font-family: 'Rubik', sans-serif;
  font-family: 'Rubik Glitch', cursive;
  text-align: center;
  position: absolute;
  left: 10px;
  top: 10px;

`;

const SubTitulo = styled.h3`
  font-size: 30px;
  font-weight: 700;
  color: #CACACC;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 30px; 

  img {
    width: 150px;
    height: 150px;
    opacity: 0.3;
  }
`;

const FormInput = styled.input`
  width: 326px;
  height: 58px;
  border-radius: 15px;
  border: 1px solid #CACACC;
  background-color: rgba(255, 255, 255, 0.05);
  margin-top: 10px;
  color: white;
  padding: 0 5px;
`;

const FormButton = styled.button`
  width: 326px;
  height: 58px;
  border-radius: 30px;
  border: 1px solid #CACACC;
  background-color: transparent;
  margin-top: 15px;
  color: white;
`;

const Legenda = styled.p`
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`;

export {
  GlobalStyle, 
  TituloLogo,
  Logo,
  SubTitulo,
  FormInput,
  FormButton,
  Legenda,
}