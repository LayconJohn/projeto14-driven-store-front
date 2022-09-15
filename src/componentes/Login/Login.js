import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../../Context/UserContext";

import { loginUser } from "../../servicos/drivenStore";

import { TituloLogo, Logo, SubTitulo, FormInput, FormButton, Legenda } from "../../assets/globalStyles";
import logo from "../../assets/logo.png";

export default function Login() {
    //state
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [desabilitado, setDesabilitado] = useState(false);

    //hooks
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);

    //logic
    function loginUsuario(e) {
        e.preventDefault();
        setDesabilitado(true);

        const body = {email, senha};
        loginUser(body)
            .then((res) => {
                setUser(res.data)
                navigate("/produtos")
            })
            .catch((err) => {
                console.log(err);
                alert("Email ou senha incorreta")
                setEmail("");
                setSenha("");
            })

        setDesabilitado(false);
    }

    //render
    return (
        <Tela>
            <Logo>
                <TituloLogo>Driven Store</TituloLogo>
                <img src={logo} alt="Driven Store"/>
            </Logo>
            <SubTitulo> Entre com sua Conta </SubTitulo>
            <form onSubmit={(e) => loginUsuario(e)}>
                <FormInput 
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={desabilitado}
                    required
                />
                <FormInput 
                    placeholder="Senha"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    disabled={desabilitado}
                    required
                />

                <FormButton type="submit" disabled={desabilitado}>
                    {desabilitado ? 
                    "Carregando..." 
                    : 
                    "Entrar"
                    }
                </FormButton>
            </form>
            <Legenda onClick={() => navigate("/cadastro")}> Ainda não possui uma conta? </Legenda>
        </Tela>
    )
}

const Tela = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;