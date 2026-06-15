import '../styles/resume.css';

function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="container">
        <h2 className="section-title">Resume</h2>

        <div className="resume-card">
          <p>Download my latest resume for detailed professional information.</p>

          <a href="/resume.pdf" download className="btn">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;