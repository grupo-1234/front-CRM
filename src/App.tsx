import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import EditarPerfil from "./pages/perfil/editarPerfil/EditarPerfil";
import Perfil from "./pages/perfil/visualizarPerfil/Perfil";
import CardCrm from "./components/cards/crm/Cardcrm";
import Cardproduto from "./components/cards/produtos/Cardproduto";

function App() {
 return (
 <>
  <BrowserRouter>
     <Navbar />
     {/* <Home />
     <Cardproduto />
     <CardCrm /> */}
     <Perfil /> 
     <EditarPerfil />  
     <Footer />
  </BrowserRouter>

</>
 );
}

export default App;