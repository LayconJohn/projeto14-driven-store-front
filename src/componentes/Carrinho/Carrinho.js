import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { pegarCarrinho } from "../../servicos/drivenStore";

import UserContext from "../../Context/UserContext";

export default function Carrinho() {
    //state
    const [carrinho, setCarrinho] = useState([]);
    
    //hooks
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    //logic
    useEffect( () => {
        const token = localStorage.getItem("token")
        pegarCarrinho(token)
            .then( (res) => {
                setCarrinho(res.data);
            })
            .catch( (err) => {
                console.log(err.message);
                alert("Faça o login e tente novamente")
                navigate("/login");
            })
    }, [])

    //render
    return (
        <>
            {
            carrinho.length === 0 ? 
            "Carrinho vazio" 
            : 
            carrinho.map( (value, index) => {
                return <li>{value.nome}</li>
            })
            }
        </>
    )
}