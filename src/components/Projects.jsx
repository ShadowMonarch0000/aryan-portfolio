import { useState } from "react";

import escapeMaze from "../assets/projects/escape-maze.png";
import melanoma from "../assets/projects/melanoma.png";

function Projects() {
  const [preview, setPreview] = useState({
    visible: false,
    image: null,
    x: 0,
    y: 0,
  });

  const projects = [
    {
      number: "01",
      name: "ESCAPE MAZE",
      description:
        "An interactive maze game featuring procedural maze generation and a web-based interface.",
      tech: "C++ • HTML • CSS • JavaScript",
      link:
        "https://github.com/ShadowMonarch0000/escape-maze-game",
      image: escapeMaze,
    },

    {
      number: "02",
      name: "MELANOMA DETECTION AI",
      description:
        "An AI-based project for detecting melanoma from skin lesion images using machine learning.",
      tech: "Python • Machine Learning",
      link:
        "https://github.com/ShadowMonarch0000/melanoma-detection-ai",
      image: melanoma,
    },
  ];

  return (
    <section className="projects" id="projects">

      {/* Section Label */}
      <div className="section-label">
        03 — PROJECTS
      </div>

      {/* Heading */}
      <h2 className="projects-title">
        SELECTED
        <br />
        WORK
      </h2>

      {/* =========================
          FLOATING PROJECT PREVIEW
      ========================= */}

      <div
        className={`project-preview ${
          preview.visible ? "show" : ""
        }`}
        style={{
          left: `${preview.x}px`,
          top: `${preview.y}px`,
        }}
      >
        {preview.image && (
          <img
            src={preview.image}
            alt="Project Preview"
          />
        )}
      </div>

      {/* =========================
          PROJECT LIST
      ========================= */}

      <div className="projects-list">

        {projects.map((project) => (

          <a
            key={project.number}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"

            onMouseEnter={() =>
              setPreview((p) => ({
                ...p,
                visible: true,
                image: project.image,
              }))
            }

            onMouseLeave={() =>
              setPreview((p) => ({
                ...p,
                visible: false,
              }))
            }

            onMouseMove={(e) =>
              setPreview((p) => ({
                ...p,

                // Move preview away from cursor circle
                x: e.clientX + 60,
                y: e.clientY - 180,
              }))
            }
          >

            {/* Number */}
            <div className="project-number">
              {project.number}
            </div>

            {/* Main Content */}
            <div className="project-main">

              <h3 className="project-name">
                {project.name}
              </h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech}
              </div>

            </div>

            {/* Arrow */}
            <div className="project-arrow">
              ↗
            </div>

          </a>

        ))}

      </div>

    </section>
  );
}

export default Projects;