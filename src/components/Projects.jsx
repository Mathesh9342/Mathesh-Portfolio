import '../styles/projects.css';

function Projects() {
  const projects = [
    {
      title: '🏦 IOB NEST',
      stack: 'React.js, Node.js, Express.js, Oracle Database',
      desc: 'Worked as a Full Stack Developer on IOB NEST, a large-scale enterprise banking platform developed for Indian Overseas Bank. Contributed to frontend and backend development, secure API integration, approval workflows, field-level encryption, production bug fixes, and enterprise-scale database operations. This ₹60+ lakh banking application serves lakhs of users across India.',
      liveLink: 'https://nest.iob.bank.in/',
      featured: true,
    },
    {
      title: 'Learning Management System (LMS)',
      stack: 'HBS, CSS, JavaScript, Node.js, Express.js, MySQL',
      desc: 'Built a role-based learning management system with secure authentication, course management, real-time communication, and progress tracking.',
      liveLink: null,
      featured: false,
    },
    {
      title: 'Hotel Management System',
      stack: 'ASP.NET Core MVC, SQL Server',
      desc: 'Developed a complete hotel management platform with booking, billing, guests, rooms, suppliers, and invoice modules.',
      liveLink: null,
      featured: false,
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className={`project-card ${
                project.featured ? 'featured-project' : ''
              }`}
              key={index}
            >
              {project.featured && (
                <span className="featured-badge">
                  LIVE ENTERPRISE BANKING PROJECT
                </span>
              )}

              <h3>{project.title}</h3>

              {project.featured && (
                <p className="enterprise-tag">
                  Enterprise Banking Platform
                </p>
              )}

              <p className="stack">{project.stack}</p>
              <p>{project.desc}</p>

              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Live Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;