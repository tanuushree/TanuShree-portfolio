import React from "react";
import './App.css';
import Navbar from "./components/nav/NavBar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Work from "./components/work/Work";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Work />

    </div>
  );
}

export default App;
