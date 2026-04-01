import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Services from './Components/Services';
import Navbar from './Components/Navbar';
import About from './Components/About';
import { Portfolio } from './Components/Portfolio';
import Footer from './Components/Footer';
import Softwaredevelopment from './Components/Services/Softwaredevelopment';
import  Creativedesign  from './Components/Services/Creativedesign';
import Marketing from './Components/Services/Marketing';
import Ecommerce from './Components/Services/Ecommerce';
import Contact from './Components/Contactus/ContactUs';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/softwaredevelopment" element={<Softwaredevelopment/>} />
        <Route path="/creativedesign" element={<Creativedesign/>} />
        <Route path="/marketing" element={<Marketing/>}/>
        <Route path="/ecommerce" element={<Ecommerce/>} />
      </Routes>
      <Contact/>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
