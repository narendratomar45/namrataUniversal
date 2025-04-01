import ContactForm from "./Componets/ContactForm";
import Footer from "./Componets/Footer";
import Navbar from "./Componets/Navbar";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className=" bg-gray-200">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
