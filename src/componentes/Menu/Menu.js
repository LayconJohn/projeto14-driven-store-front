import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

export default function Menu({ setProdutos, setTodos, todos }) {
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
      <h1 onClick={() => listarProdutos("todos")}>Todos</h1>
      <h1 onClick={() => listarProdutos("men's clothing")}>Masculino</h1>
      <h1 onClick={() => listarProdutos("women's clothing")}>Feminino</h1>
      <h1 onClick={() => listarProdutos("jewelery")}>Joías</h1>
      <h1 onClick={() => listarProdutos("electronics")}>Eletrônicos</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  margin: 20px;
`;
