import React from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from "./components/Skills"
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div  >
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>  
    </div>
  );
}

export default App;
