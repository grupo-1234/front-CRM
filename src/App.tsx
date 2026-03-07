import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Perfil from "./pages/perfil/visualizarPerfil/Perfil";

import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias";

import { AuthProvider } from "./contexts/AuthContext";
import ListaProdutos from "./pages/produto/Produto";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <div className="min-h-[80vh] bg-slate-50">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} /> 
            <Route path="/home" element={<Home />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/categoria" element={<ListaCategorias />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;