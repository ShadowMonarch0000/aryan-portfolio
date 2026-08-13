function Skills() {
  const skills = [
    "C++",
    "Python",
    "JavaScript",
    "React",
    "HTML / CSS",
    "Git",
    "SQL",
    "Java",
  ];

  return (
    <section className="skills" id="skills">

      <div className="section-label">
        02 — SKILLS
      </div>

      <div className="skills-header">
        <h2 className="skills-title">
          TECHNOLOGIES
          <br />
          I WORK WITH
        </h2>
      </div>

      <div className="skills-list">

        {skills.map((skill, index) => (
          <div
            className="skill-item"
            key={skill}
          >
            <span className="skill-number">
              0{index + 1}
            </span>

            <span className="skill-name">
              {skill}
            </span>

            <span className="skill-arrow">
              ↗
            </span>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;