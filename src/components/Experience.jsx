import '../styles/experience.css';

function Experience() {
  const experiences = [
    {
      role: 'Backend Developer',
      company: 'Coderzbot',
      duration: 'Current',
      description:
        'Working on backend development, API integrations, bug fixing, production issue resolution, and database optimization for live applications.',
    },
    {
      role: 'Software Developer',
      company: 'Freelance / Personal Projects',
      duration: 'Previous',
      description:
        'Built scalable applications including hotel management systems, workflow systems, and real-time notification platforms.',
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-card" key={index}>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span>{exp.duration}</span>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;