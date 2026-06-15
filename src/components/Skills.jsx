import '../styles/skills.css';

function Skills() {
  const skills = [
    { name: 'Node.js', level: '90%' },
    { name: 'Express.js', level: '88%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'MySQL', level: '92%' },
    { name: 'MSSQL', level: '88%' },
    { name: 'REST APIs', level: '90%' },
    { name: 'JWT Authentication', level: '85%' },
    { name: 'Socket.IO', level: '80%' },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;