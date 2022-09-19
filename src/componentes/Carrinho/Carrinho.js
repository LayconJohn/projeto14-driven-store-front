import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

import { pegarCarrinho, enviarPedido, limparCarrinho } from "../../servicos/drivenStore";
import { SubTitulo, FormButton, Legenda } from "../../assets/globalStyles";

import UserContext from "../../Context/UserContext";
import ItemCarrinho from "./ItemCarrinho";

export default function Carrinho() {
    //state
    const [carrinho, setCarrinho] = useState([]);
    
    //hooks
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    //logic
    useEffect( () => {
        const token = localStorage.getItem("token");
        pegarCarrinho(token)
            .then( (res) => {
                setCarrinho(res.data);
                console.log(res.data);
            })
            .catch( (err) => {
                console.log(err.message);
                alert("Faça o login e tente novamente")
                navigate("/login");
            })

    }, [])

    function finalizarCarrinho() {
        const token = localStorage.getItem("token");
        if (carrinho.length > 0) {
            enviarPedido(token)
            .then((res) => {
                limparCarrinho(token)
                    .then((res) => {
                        navigate("/pedido");
                    })
                    .catch( (err) => {
                        alert("Erro ao limpar o carrinho")
                    })
            })
            .catch((err) => {
                console.log(err.message);
                alert("Erro ao finalizar o pedido")
            })
        }
    }

    //render
    return (
        <Tela>
            <SubTitulo>Carrinho</SubTitulo>
            <EspacoPedidos>
            {
            carrinho.length === 0 ? 
            "Carrinho vazio" 
            : 
            carrinho.map( (item, index) => {
                return <ItemCarrinho 
                    key={item._id}
                    id={item._id}
                    imagem={item.imagem}
                    preco={item.preco}
                    quantidade={item.quantidade}
                    titulo={item.titulo}
                />
            })
            }
            </EspacoPedidos>
            <FormButton onClick={finalizarCarrinho}>Finalizar Pedido</FormButton>
        </Tela>
    )
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
    border: 1px solid #FDFDFC;
    overflow-y: scroll;
`;

