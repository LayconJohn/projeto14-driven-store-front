
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Item from "./Item/Item";
import Produtos from "./Produtos/Produtos";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="/produtos/:id" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
}
