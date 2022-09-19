
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Header from "../Header/Header";

import { pegarProdutos } from "../../servicos/drivenStore";
export default function Produtos() {
  const [produtos, setProdutos] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    pegarProdutos(token).then((res) => setProdutos(res.data));
  }, []);
  const navigate = useNavigate();

  return (
    <Container>
      <Header setProdutos={setProdutos} />
      <Catalogo>
        {produtos?.map((res) => (
          <Item
            key={res._id}
            onClick={() => navigate(`/produtos/${res._id}`, { state: res._id })}
          >
            <img src={res.imagem} alt={res._id} />
            <h1>{res.titulo}</h1>
            <p>R${res.preco?.toFixed(2)}</p>
          </Item>
        ))}
      </Catalogo>
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: #f4f4f4;
`;
const Catalogo = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Item = styled.div`
  width: 100px;
  height: 200px;
  margin: 20px 20px;
  padding: 5px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 10px 5px 5px #eeeaea;
  position: relative;
  cursor: pointer;
  img {
    max-width: 100px;
    max-height: 100px;
    width: auto;
    height: auto;
  }
  h1 {
    font-size: 12px;
    text-align: center;
    font-weight: 700;
    margin-top: 5px;
    height: 60px;
    width: 90px;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    text-align: justify;
    font-size: 12px;
    position: absolute;
    left: 5px;
    bottom: 5px;
  }
`;
