import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importe Route e Routes
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";
import FormCategoria from "./components/categorias/formCategoria/FormCategoria";
import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias"; // Importe seus componentes
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'> {/* Div para garantir que o rodapé não suba */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarCategoria" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );

}

export default App; 