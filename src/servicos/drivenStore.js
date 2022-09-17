import axios from "axios";

const BASE_URL = "http://localhost:5000"

function cadastrarUser(body) {
    const promisse = axios.post(`${BASE_URL}/cadastro`, body);
    return promisse;
}

function loginUser(body) {
    const promisse = axios.post(`${BASE_URL}/login`, body);
    return promisse;
}

function pegarCarrinho(token) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };
    const promisse = axios.get(`${BASE_URL}/carrinho`, config);
    return promisse;
}

export {
    cadastrarUser,
    loginUser,
    pegarCarrinho,
}