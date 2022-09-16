import styled, { createGlobalStyle } from "styled-components";

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
  
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  font-family: Open-Sans, Helvetica, Sans-Serif;
	font-family: 'Raleway', sans-serif;
background-color: #f4f4f4;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
strong {
	font-weight: bold;
}
*{
    box-sizing:border-box;
}
a {
	text-decoration:none;
}
button{
	cursor:pointer;
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
  left: 5px;
  top: 50px;

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
  color: white;
  margin: 5px 10px;
  padding: 0 15px;
`;

const FormButton = styled.button`
  width: 326px;
  height: 58px;
  border-radius: 30px;
  border: 1px solid #CACACC;
  background-color: transparent;
  margin: 15px 10px;
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

