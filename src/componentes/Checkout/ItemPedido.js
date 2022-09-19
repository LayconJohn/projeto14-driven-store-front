import styled from "styled-components";
export default function ItemPedido({ imagem, preco, quantidade, titulo, id }) {
  const token = localStorage.getItem("token");
  return (
    <EspacoPedido>
      <img src={imagem} alt={"img"} />
      <div>
        {" "}
        {titulo} <br /> R$ {preco}{" "}
      </div>
      <QuantidadeItens>
        <div>{quantidade} </div>
      </QuantidadeItens>
    </EspacoPedido>
  );
}
const EspacoPedido = styled.div`
  width: 330px;
  height: 80px;
  border-radius: 12px;
  border: 1px solid #fdfdfc;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding-left: 20px;
  margin: 5px 0px;
  object-fit: cover;
  box-shadow: 5px 8px rgba(0, 0, 0, 0.7);

  div {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
  }

  img {
    width: 60px;
    height: 60px;
  }
`;

const QuantidadeItens = styled.div`
  width: 30px;
  height: 80px;
  background-color: #d4c394;
  color: white;
  position: absolute;
  right: 10px;
  top: 0px;
  border-radius: 2px;
  display: flex;
  justify-content: center;

  div {
    margin: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
