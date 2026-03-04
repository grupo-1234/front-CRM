import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import EditarPerfil from "./pages/perfil/editarPerfil/EditarPerfil";
import Perfil from "./pages/perfil/visualizarPerfil/Perfil";

function App() {
 return (
 <>
  <BrowserRouter>
      <Navbar/>
      <Perfil />
      <Footer/>
  </BrowserRouter>

</>
 );
}

export default App;