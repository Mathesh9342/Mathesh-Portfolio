import '../styles/about.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-card">
          <p>
            I am a Backend Engineer passionate about building secure,
            scalable, and high-performance software systems that solve
            real business problems.
          </p>

          <p>
            I specialize in backend development using Node.js, Express.js,
            REST APIs, MySQL, Oracle Database, and enterprise application workflows.
          </p>

          <p>
            I have hands-on experience working on production-scale applications
            including IOB NEST, an enterprise banking platform serving lakhs
            of users across India.
          </p>

          <p>
            My strengths include API design, debugging critical production issues,
            database optimization, secure workflow implementation, and writing
            clean maintainable code.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;