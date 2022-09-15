import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cadastro from "./Cadastro/Cadastro";
import { GlobalStyle } from "../assets/globalStyles";

export default function App() {
    return (
        <>  
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/cadastro" element={<Cadastro />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

