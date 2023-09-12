import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Trainers from "./components/Trainers";
import Navbar from "./components/Navbar"; // Create a Navbar component for navigation
import Events from "./components/Events";
import GymInfo from "./components/GymInfo";
import "./App.css";
import NoPage from "./components/NoPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gymInfo" element={<GymInfo />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route path="/events" element={<Events />} />
          <Route path="/trainers" element={<Trainers />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
