import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Cardproduto from "./components/cards/produtos/Cardproduto";
import CardCrm from "./components/cards/crm/Cardcrm";


function App() {
 return (
 <>
  <BrowserRouter>
     <Navbar />
     <Home />
     <Cardproduto />
     <CardCrm />
     <Footer />
  </BrowserRouter>

</>
 );
}

export default App;