import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

import Home from "./pages/home/Home"
import RecursosCards from "./components/cards/RecursosCards"
import Cardproduto from "./components/cards/produtos/Cardproduto"
import Cardcrm from "./components/cards/crm/Cardcrm"

import Negociacoes from "./pages/negociacoes/Negociacoes"

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Home />
              <RecursosCards />
              <Cardproduto />
              <Cardcrm />
            </>
          }
        />

        <Route
          path="/negociacoes"
          element={<Negociacoes />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>

  )

}

export default App