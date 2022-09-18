import styled from "styled-components";

import {BsPlusCircleDotted} from "react-icons/bs";
import {FiMinusCircle} from "react-icons/fi";

export default function ItemCarrinho( {imagem, preco, quantidade, titulo} ) {
    return (
        <EspacoPedido>
            <img src={imagem} alt={"img"}/>
            <div> {titulo} titulo <br/> R$ {preco} 10,00  </div>
            <QuantidadeItens> 
                <div> <FiMinusCircle /> </div>
                <div>{quantidade} 4 </div>
                <div> <BsPlusCircleDotted />   </div>  
            </QuantidadeItens>
        </EspacoPedido>
    )
}

const EspacoPedido = styled.div`
    width: 330px;
    height: 80px;
    border-radius: 12px;
    border: 1px solid red;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding-left: 20px;
    margin: 5px 0px;
    
    div {
        display: flex;
        flex-direction: column;
        margin-left: 70px;
    }
`;

const QuantidadeItens = styled.div`
    width: 30px;
    height: 80px;
    background-color: red;
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