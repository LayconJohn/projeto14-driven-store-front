import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { exibirItem } from "../../servicos/drivenStore";

export default function Item() {
  //state
  const location = useLocation();
  const [item, setItem] = useState({});
  const [quantidade, setQuantidade] = useState(1);


  //hooks
  const id = location.state;
  const navigate = useNavigate();

  //logic
  useEffect(() => {
    const promise = axios.get(`http://localhost:5000/produtos/${id}`);
    promise.then((res) => {
      setItem(res.data);
      console.log(res.data);
    });

    console.log("Id: " + id);

  }, []);

  function addCarrinho() {
    console.log(item);
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Por favor faça login antes de adicionar itens ao carrinho");
      navigate("/login");
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
      quantidade,
    };
    const promise = exibirItem(body, config, id);
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
              <span>
                <p>Quantidade</p>
                <select
                  onChange={(event) => {
                    setQuantidade(event.target.value);
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </span>
              <div>
                <button onClick={() => addCarrinho()}>
                  Adicionar ao Carrinho
                </button>
              </div>
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
