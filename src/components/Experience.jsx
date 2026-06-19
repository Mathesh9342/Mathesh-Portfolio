import '../styles/experience.css';

function Experience() {
  const experiences = [
        {
      role: 'Software Developer',
      company: 'Muthu Soft Labs/ Freelancer',
      duration: 'Current',
      points: [
        'Worked on IOB NEST, a live enterprise banking platform used by lakhs of users.',
        'Developed frontend modules using React.js.',
        'Built secure backend APIs using Node.js and Express.js.',
        'Worked with Oracle Database for enterprise data operations.',
        'Handled production issue resolution, debugging, and performance optimization.',
        'Implemented secure workflows including field-level encryption and approval systems.',
      ],
    },
    {
      role: 'Backend Developer',
      company: 'Coderzbot Innovation Pvt Ltd',
      duration: 'Previous',
      points: [
        'Began my journey in the software industry as a Backend Developer', 
        'Focusing on backend architecture and API development using Python FastAPI',
        'Built secure and efficient APIs, implemented core business logic',
        'Managed data operations using MySQL databases',
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-card" key={index}>
              <div className="experience-header">
                <h3>{exp.role}</h3>
                <span className="duration">{exp.duration}</span>
              </div>

              <h4>{exp.company}</h4>

              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;