import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
export default function Produtos() {
  const [produtos, setProdutos] = useState();
  useEffect(() => {
    const promise = axios.get(`http://localhost:5000/produtos`);
    promise.then((res) => setProdutos(res.data));
  }, []);
  const navigate = useNavigate();
  return (
    <Container>
      {produtos?.map((res) => (
        <Item
          key={res.id}
          onClick={() => navigate(`/produtos/${res._id}`, { state: res._id })}
        >
          <img src={res.image} />
          <p>{res.title}</p>
          <p>R${Number(res.price).toFixed(2)}</p>
        </Item>
      ))}
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: #f4f4f4;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;
const Item = styled.div`
  width: 150px;
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
  img {
    max-width: 100px;
    max-height: 100px;
    width: auto;
    height: auto;
  }
  p {
    height: 25px;
    width: 150px;
    word-wrap: break-word;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    text-align: center;
  }
`;
