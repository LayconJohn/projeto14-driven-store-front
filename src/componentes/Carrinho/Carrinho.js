import { useState, useEffect, useContext } from "react";

import { pegarCarrinho } from "../../servicos/drivenStore";

import UserContext from "../../Context/UserContext";

export default function Carrinho() {
    //state
    const [carrinho, setCarrinho] = useState([]);
    
    //hooks
    const {user} = useContext(UserContext);

    //logic
    useEffect( () => {

        pegarCarrinho(user.token).then( (res) => {
            setCarrinho(res.data);
        })
    }, [])

    //render
    return (
        <>
            {
            carrinho.length === 0 ? 
            "Carrinho vazio" 
            : 
            <li>{carrinho.nome}</li>
            }
        </>
    )
}