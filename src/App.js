import React from "react";
import './App.css';
import Navbar from "./components/nav/NavBar";
import Home from "./components/home/Home";
import About from "./components/about/About";


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />

    </div>
  );
}

export default App;
