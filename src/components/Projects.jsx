import '../styles/projects.css';

function Projects() {
  const projects = [
    {
      title: 'Hotel Management System',
      stack: 'ASP.NET Core MVC, SQL Server',
      desc: 'Developed a complete hotel management platform with booking, billing, guests, rooms, suppliers, and invoice modules.',
    },
    {
      title: 'Approval Workflow System',
      stack: 'Node.js, Express.js, MySQL',
      desc: 'Built a role-based approval system with maker-checker workflow, authentication, and notifications.',
    },
    {
      title: 'Real-Time Notification Platform',
      stack: 'Node.js, Socket.IO',
      desc: 'Implemented real-time communication system for instant notifications and live updates.',
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p className="stack">{project.stack}</p>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;