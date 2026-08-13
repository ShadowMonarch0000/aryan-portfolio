function Skills() {
  const skills = [
    ["01", "C++"],
    ["02", "Java"],
    ["03", "Python"],
    ["04", "React"],
    ["05", "JavaScript"],
    ["06", "Git & GitHub"],
  ];

  return (
    <section className="skills" id="skills">

      <div className="skills-header">

        <div className="section-label">
          02 — SKILLS
        </div>

        <h2 className="skills-title">
          WHAT I
          <br />
          WORK WITH.
        </h2>

      </div>


      <div className="skills-list">

        {skills.map(([number, name]) => (

          <div
            className="skill-item"
            key={number}
          >

            <div className="skill-number">
              {number}
            </div>

            <div className="skill-name">
              {name}
            </div>

            <div className="skill-arrow">
              ↗
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;