import React from "react";
import "./App.css";
const Navbar = React.lazy(() => import("./components/Navbar"));
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Skills = React.lazy(() => import("./components/Skills"));
const Project = React.lazy(() => import("./components/Project"));
const Contact = React.lazy(() => import("./components/Contact"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
