import axios from "axios";
import styled from "styled-components";
import { IoList } from "react-icons/io5";

export default function Header({ setProdutos }) {
  function listarProdutos(nome) {
    const promise = axios.get(
      `http://localhost:5000/produtos?categoria=${nome}`
    );
    promise.then((res) => {
      setProdutos(res.data);
    });
  }
  return (
    <Container>
      <p>DrivenStore</p>
      <span>
        <IoList size={"25px"} />
      </span>
      <Topo>
        <h1 onClick={() => listarProdutos("todos")}>Todos</h1>
        <h1 onClick={() => listarProdutos("masculino")}>Masculino</h1>
        <h1 onClick={() => listarProdutos("feminino")}>Feminino</h1>
        <h1 onClick={() => listarProdutos("joias")}>Joías</h1>
        <h1 onClick={() => listarProdutos("eletronicos")}>Eletrônicos</h1>
      </Topo>
    </Container>
  );
}
const Container = styled.div`
  height: 100px;

  p {
    font-family: "Lobster", cursive;
    font-size: 50px;
    margin: 5px auto 0 30px;
    color: #ffffff;
    text-shadow: 2px 2px 2px #cfb15c;
  }
  span {
    position: fixed;
    left: calc(100% - 50px);
    top: 25px;
  }
`;

const Topo = styled.div`
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
