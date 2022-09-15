import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
export default function Produtos() {
  const [produtos, setProdutos] = useState();
  useEffect(() => {
    const promise = axios.get(`http://localhost:5000/produtos`);
    promise.then((res) => setProdutos(res.data));
  }, []);

  return (
    <Container>
      {produtos?.map((res) => (
        <Item>
          <img src={res.image} />
          <p>{res.title}</p>
          <p>{res.price}</p>
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
  img {
    max-width: 100px;
    max-height: 100px;
    width: auto;
    height: auto;
  }
  p {
    text-align: center;
  }
`;
