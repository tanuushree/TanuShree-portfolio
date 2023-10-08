import React from "react";
import './App.css';
import Navbar from "./components/nav/NavBar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Work from "./components/work/Work";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Footer />

    </div>
  );
}

export default App;
