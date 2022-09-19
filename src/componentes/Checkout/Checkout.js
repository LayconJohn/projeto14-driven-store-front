import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmarPedido, exibirPedido } from "../../servicos/drivenStore";
import styled from "styled-components";
import { SubTitulo, FormButton, FormInput } from "../../assets/globalStyles";
import ItemPedido from "./ItemPedido";

export default function Checkout() {
  const [pedido, setPedido] = useState();
  const [oculto, setOculto] = useState(true);
  const [form, setForm] = useState({
    nome: "",
    numero: "",
    cvv: "",
    data: "",
  });

  function handleForm({ name, value }) {
    setForm({ ...form, [name]: value });
  }
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    exibirPedido(token)
      .then((res) => {
        setPedido(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        alert("Erro ao exibir Pedido");
        navigate("/login");
      });
  }, []);

  function finalizarPedido() {
    setOculto(false);
  }
  function enviarPedido() {
    const promisse = confirmarPedido(form, pedido, token);
    promisse.then((res) => {
      alert("Pedido Finalizado");
      navigate("/");
    });
  }
  if (!pedido) return <>Carregando</>;
  console.log(form);
  return (
    <Tela>
      <SubTitulo>Pedido</SubTitulo>
      {oculto ? (
        <>
          <EspacoPedidos>
            {pedido.length === 0
              ? "pedido vazio"
              : pedido?.map((item, index) => {
                  return item.produtos?.map((item) => {
                    return (
                      <ItemPedido
                        key={item._id}
                        id={item._id}
                        imagem={item.imagem}
                        preco={item.preco}
                        quantidade={item.quantidade}
                        titulo={item.titulo}
                      />
                    );
                  });
                })}
          </EspacoPedidos>

          <FormButton onClick={() => finalizarPedido()}>
            Ir Pagamento
          </FormButton>
        </>
      ) : (
        <>
          <p>Digite os dados do Cartão para pagamento</p>
          <FormInput
            placeholder="Numero do Cartão"
            type="text"
            name="numero"
            onChange={(e) =>
              handleForm({ name: e.target.name, value: e.target.value })
            }
            required
          />
          <FormInput
            placeholder="Nome do Titular"
            type="text"
            name="nome"
            onChange={(e) =>
              handleForm({ name: e.target.name, value: e.target.value })
            }
            required
          />
          <FormInput
            placeholder="CVV"
            type="password"
            name="cvv"
            onChange={(e) =>
              handleForm({ name: e.target.name, value: e.target.value })
            }
            required
          />
          <FormInput
            placeholder="Data de validade MM/AA"
            type="text"
            name="data"
            onChange={(e) =>
              handleForm({ name: e.target.name, value: e.target.value })
            }
            required
          />
          <FormButton onClick={() => enviarPedido()}>
            Confirmar Pagamento
          </FormButton>
        </>
      )}
    </Tela>
  );
}
const Tela = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const EspacoPedidos = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #fdfdfc;
  overflow-y: scroll;
`;
