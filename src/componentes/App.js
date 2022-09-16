import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/globalStyles";
import Item from "./Item/Item";
import Produtos from "./Produtos/Produtos";
export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="/produtos/:id" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
}
