import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Contacts from "./components/contacts/Contacts.jsx";
import "./App.css";
import Contactinfo from "./components/ContactInfo/Contactinfo.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Homebody from "./components/Homebody/Homebody.jsx";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact.jsx";
import Aboutus from "./pages/Aboutus/Aboutus.jsx";
import Services from "./pages/Services/Services.jsx";
import Pricing from "./pages/Pricing/Pricing.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import ScrollToTop from "./components/scrollToTop.js";
import PageNotFound from "./components/pageNotFound.jsx";

const App = () => (
  <div className="App">
    <Contacts />
    <Navbar />
    <ScrollToTop /> {/* Scrolls to top on route change */}
    <Routes>
      <Route path="/" element={<Homebody />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Contactinfo />
    <Footer />
    <div className="app-rights">
      <p>© 2025 Ravtech designs. All Rights Reserved.</p>
    </div>
  </div>
);

export default App;
