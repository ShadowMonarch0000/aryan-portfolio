import { useEffect } from "react";

import "./App.css";
import { heroAnimation } from "./animations";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


// =====================================================
// SPLIT TEXT
// =====================================================

function splitText(text) {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className="letter"
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
}


// =====================================================
// APP
// =====================================================

function App() {

  useEffect(() => {

    const cleanup = heroAnimation();

    return cleanup;

  }, []);


  return (
    <>

      {/* =================================================
          CUSTOM CURSOR
      ================================================= */}

      <div className="cursor-circle">
        <div className="cursor-dot"></div>
      </div>


      {/* =================================================
          HERO
      ================================================= */}

      <section
        className="hero"
        id="home"
      >

        {/* NAVBAR */}

        <nav className="navbar">

          <div className="logo">
            ARYAN
          </div>


          <div className="nav-links">

            <a href="#about">
              About
            </a>

            <a href="#skills">
              Skills
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

        </nav>


        {/* HERO CONTENT */}

        <div className="hero-content">

          <div className="hero-small">
            HELLO, I'M
          </div>


          <h1 className="hero-title">

            <span className="word">
              {splitText("ARYAN")}
            </span>

            <span className="word">
              {splitText("KUMAR")}
            </span>

          </h1>


          <p className="hero-description">
            Computer Science Engineering student building
            interactive digital experiences.
          </p>


          <a
            href="#projects"
            className="hero-button"
          >
            VIEW MY WORK ↗
          </a>

        </div>


        {/* HERO SHAPES */}

        <div className="hero-shape shape-one"></div>

        <div className="hero-shape shape-two"></div>


        {/* SCROLL */}

        <div className="scroll-indicator">
          SCROLL ↓
        </div>

      </section>


      {/* =================================================
          ABOUT
      ================================================= */}

      <About />


      {/* =================================================
          SKILLS
      ================================================= */}

      <Skills />


      {/* =================================================
          PROJECTS
      ================================================= */}

      <Projects />


      {/* =================================================
          CONTACT
      ================================================= */}

      <Contact />

    </>
  );
}


export default App;