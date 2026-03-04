import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
 return (
 <>
  <BrowserRouter>
     <Navbar />
     <Home />
     <Footer />
  </BrowserRouter>

</>
 );
}

export default App;