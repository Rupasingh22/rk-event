import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Service from "./components/Services";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import BirthdayParty from "./events/BirthdayParty";
import ValentineParty from "./events/ValentineParty";
import Reception from "./events/Reception";
import GraduationParty from "./events/GraduationParty";
import CorporateEvent from "./events/CorporateEvent";
import AnniversaryCelebration from "./events/AnniversaryCelebration";
import Dashboard from "./components/Dashboard";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import BookEvent from "./components/BookEvent";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} /> 
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events/birthday-party" element={<BirthdayParty />} />
        <Route path="/events/valentine-party" element={<ValentineParty />} />
        <Route path="/events/reception" element={<Reception />} />
        <Route path="/events/graduation-party" element={<GraduationParty />} />
        <Route path="/events/corporate-event" element={<CorporateEvent />} />
        <Route path="/events/anniversary-celebration" element={<AnniversaryCelebration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />  
        <Route path="/book-event" element={<BookEvent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
