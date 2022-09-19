import styled from "styled-components";
import { useState } from "react";

import { removerDoCarrinho, editarProduto } from "../../servicos/drivenStore";

import {BsPlusCircle} from "react-icons/bs";
import {FiMinusCircle} from "react-icons/fi";

export default function ItemCarrinho( {imagem, preco, quantidade, titulo, id, idProduto} ) {
    //state
    const [quantidadePedido, setQuantidadePedido] = useState(Number(quantidade));

    const token = localStorage.getItem("token");

    //logic
    function excluirItemDoCarrinho() {
        removerDoCarrinho(token, idProduto).then((res) => {
            alert("Item removido")
            if (quantidadePedido > 0) {
                setQuantidadePedido(quantidadePedido - 1)
            }
        })
    }

    function editarItemDoCarrinho() {
        editarProduto(token, idProduto).then((res) => {
            alert("Item adicionado")
            setQuantidadePedido(quantidadePedido + 1)
        })
    }

    //render
    return (
        <EspacoPedido>
            <img src={imagem} alt={"img"}/>
            <div> {titulo} <br/> R$ {preco} </div>
            <QuantidadeItens> 
                <div onClick={excluirItemDoCarrinho}> <FiMinusCircle /> </div>
                <div>{quantidadePedido} </div>
                <div onClick={editarItemDoCarrinho}> <BsPlusCircle/>   </div>  
            </QuantidadeItens>
        </EspacoPedido>
    )
}

const EspacoPedido = styled.div`
    width: 330px;
    height: 80px;
    border-radius: 12px;
    border: 1px solid #FDFDFC;
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
    background-color: #D4C394;
    color: white;
    position: absolute;
    right: 10px;
    top: 0px;
    border-radius: 2px;
    display: flex;
    justify-content: center;

    div {
        margin:1px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;