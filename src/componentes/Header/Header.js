import styled from "styled-components";
import { categoria } from "../../servicos/drivenStore";

import Topo from "../../Topo/Topo";

export default function Header({ setProdutos }) {
  function listarProdutos(nome) {
    const promise = categoria(nome);
    promise.then((res) => {
      setProdutos(res.data);
    });
  }

  return (
    <Container>
      <Topo />
      <Categorias>
        <h1 onClick={() => listarProdutos("todos")}>Todos</h1>
        <h1 onClick={() => listarProdutos("masculino")}>Masculino</h1>
        <h1 onClick={() => listarProdutos("feminino")}>Feminino</h1>
        <h1 onClick={() => listarProdutos("joias")}>Joías</h1>
        <h1 onClick={() => listarProdutos("eletronicos")}>Eletrônicos</h1>
      </Categorias>
    </Container>
  );
}
const Container = styled.div`
  height: 100px;
`;

const Categorias = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 50px;
  margin: 20px;
  background-color: #d4c394;
  align-items: center;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #c7af6e;
  h1 {
    padding: 10px;
    color: #ffffff;
    cursor: pointer;
  }
`;
