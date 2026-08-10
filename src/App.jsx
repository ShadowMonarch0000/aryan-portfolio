import { useEffect } from "react";
import "./App.css";
import { heroAnimation } from "./animations";
import About from "./components/About";

const splitText = (text) => {
  return text.split("").map((letter, index) => (
    <span key={index} className="letter">
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

function App() {
  useEffect(() => {
    return heroAnimation();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <main className="hero">
        <nav className="navbar">
          <div className="logo">AK</div>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero-content">
          <p className="hero-small">HELLO, I'M</p>

          <h1 className="hero-title">
            <span className="word">
              {splitText("ARYAN")}
            </span>

            <span className="word">
              {splitText("KUMAR")}
            </span>
          </h1>

          <p className="hero-description">
            Computer Science Student
            <br />
            Developer • Problem Solver • Creator
          </p>

          <a href="#projects" className="hero-button">
            EXPLORE MY WORK →
          </a>
        </section>

        <div className="hero-shape shape-one"></div>
        <div className="hero-shape shape-two"></div>

        <div className="scroll-indicator">
          SCROLL ↓
        </div>
      </main>

      {/* ABOUT SECTION */}
      <About />
    </>
  );
}

export default App;