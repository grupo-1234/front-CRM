import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Produto from "./pages/produto/Produto";
import Cardproduto from "./components/cards/produtos/Cardproduto";
import CardCrm from "./components/cards/crm/Cardcrm";



function App() {
   return (
      <>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/produto" element={<Produto />} />
            </Routes>
            <Cardproduto />
            <CardCrm />
            <Footer />
            

         </BrowserRouter>

      </>
   );
}

export default App;