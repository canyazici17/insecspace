import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import "./App.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Programme from "./pages/Programme";
import Sponsorship from "./pages/Sponsorship";
import Registration from "./pages/Registration";
import Venue from "./pages/Venue";
import MediaCenter from "./pages/MediaCenter";
import Contact from "./pages/Contact";
import Committee from "./pages/Committee";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="pt-20 overflow-x-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/comittee" element={<MediaCenter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/speakers" element={<Committee />} />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
