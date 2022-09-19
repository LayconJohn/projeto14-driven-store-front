import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Item() {
  const location = useLocation();
  const id = location.state;
  const navigate = useNavigate();
  const [item, setItem] = useState();

  useEffect(() => {
    const promise = axios.get(`http://localhost:5000/produtos/${id}`);
    promise.then((res) => {
      setItem(res.data)
      console.log(res.data);
    });
    console.log("Id: " + id);
   
  }, []);

  
  function addCarrinho() {
    console.log(item);
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body = {
        id: item._id,
        titulo: item.titulo,
        imagem: item.imagem,
        preco: item.preco,
      }


    const promise = axios.post(
      `http://localhost:5000/carrinho/${id}`,
      body,
      config
    );
    promise.then(() => {
      alert("Adicionado ao Carrinho");
      navigate("/");
    });
  }
  if (item) {
    return (
      <Container>
        <Produto>
          <Imagem>
            <img src={item.imagem} alt="item" />
          </Imagem>
          <div>
            <p>{item.titulo}</p>
            <p>
              <strong>R${item.preco}</strong>
            </p>
            <button onClick={() => addCarrinho()}>Adicionar ao Carrinho</button>
          </div>
        </Produto>
        <h1>Descrição</h1>
        <p>{item?.descricao}</p>
      </Container>
    );
  } else {
    return <p>carregando</p>;
  }
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: #f4f4f4;
  p {
    margin: 10px;
    text-align: justify;
  }
  h1 {
    margin: 10px;
  }
`;
const Produto = styled.div`
  display: flex;
`;
const Imagem = styled.div`
  width: 250px;
  height: 250px;
  margin: 20px auto;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
