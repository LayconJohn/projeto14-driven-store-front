import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from "./Produtos/Produtos";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
}
