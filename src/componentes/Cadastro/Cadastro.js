import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { cadastrarUser } from "../../servicos/drivenStore";

import { TituloLogo, Logo, SubTitulo, FormInput, FormButton, Legenda } from "../../assets/globalStyles";
import logo from "../../assets/logo.png";

export default function Cadastro() {
    //state
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [desabilitado, setDesabilitado] = useState(false);

    //hooks
    const navigate = useNavigate();

    //logic
    function cadastrarUsuario(e) {
        e.preventDefault();
        setDesabilitado(false);

        if (senha !== confirmarSenha) {
            alert("Os campos de senhas devem ser iguais");
            setSenha("");
            setConfirmarSenha("");
            return;
        }

        const body = {nome, email, senha};
        cadastrarUser(body)
            .then( (res) => {
                console.log(res.data);
                navigate("/login");
            })
            .catch( (err) => {
                alert("Erro ao cadastrar, tente novamente");
                setNome("");
                setEmail("");
                setSenha("");
                setConfirmarSenha("");
            })

        setDesabilitado(true);
    }

    //render
    return (
        <Tela>
            <Logo>
                <TituloLogo>Driven Store</TituloLogo>
                <img src={logo} alt="Driven Store"/>
            </Logo>
            <SubTitulo> Faça seu Cadastro </SubTitulo>
            <form onSubmit={(e) => cadastrarUsuario(e)}>
                <FormInput 
                    placeholder="Nome"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    disabled={desabilitado}
                    required
                />
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
                <FormInput 
                    placeholder="Confirmar senha"
                    type="password"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    disabled={desabilitado}
                    required
                />
                <FormButton type="submit" disabled={desabilitado}>
                    {desabilitado ? 
                    "Carregando..." 
                    : 
                    "Cadastrar"
                    }
                </FormButton>
            </form>
            <Legenda onClick={() => navigate("/login")}> Já Possui cadastro? </Legenda>
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

