import styled from "styled-components";
import { GlobalStyle } from "../assets/globalStyles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Titulo> HEllo World </Titulo>
    </>
  );
}

const Titulo = styled.h1`
  font-size: 25px;
  font-weight: 700;
  color: red;
`;
