import logo from './logo.svg';
import React from 'react';
import   Navbar from './components/Navbar/Navbar.jsx';
import Contacts from './components/contacts/Contacts.jsx';
import './App.css';
import Herobanner from './components/Herobanner/Herobanner.jsx';
import Contactinfo from './components/ContactInfo/Contactinfo.jsx';
import Footer from './components/Footer/Footer.jsx';
import Homebody from './components/Homebody/Homebody.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact/Contact.jsx';
import Aboutus from './pages/Aboutus/Aboutus.jsx';
import Services from './pages/Services/Services.jsx';
import Pricing from './pages/Pricing/Pricing.jsx';


const App = () => (
  
    <div className="App">
     <Contacts />
     <Navbar />
      <Routes>
        <Route path="/" element={<Homebody />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />

      </Routes>     
     <Contactinfo />
     <Footer />
    </div>
    
  );


export default App;
