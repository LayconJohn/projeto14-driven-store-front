import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "../Context/UserContext";

import Cadastro from "./Cadastro/Cadastro";
import Login from "./Login/Login";
import { GlobalStyle } from "../assets/globalStyles";
import Item from "./Item/Item";

import Produtos from "./Produtos/Produtos";
import Carrinho from "./Carrinho/Carrinho";
import Checkout from "./Checkout/Checkout";

export default function App() {
  const [user, setUser] = useState({});
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <GlobalStyle />
          <Routes>
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Produtos />} />
            <Route path="/produtos/:id" element={<Item />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/pedido" element={<Checkout />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
