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

export {
    cadastrarUser,
    loginUser,
}