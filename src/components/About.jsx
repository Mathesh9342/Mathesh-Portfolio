import '../styles/about.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-card">
          <p>
            I am a passionate Backend Developer specializing in building
            scalable server-side applications, secure APIs, and efficient
            database architectures.
          </p>

          <p>
            My expertise includes working with Node.js, Express.js,
            REST APIs, MySQL, and Microsoft SQL Server to deliver
            production-grade applications.
          </p>

          <p>
            I have real-world experience solving bugs and critical issues
            in live applications, optimizing performance, and ensuring
            reliable backend systems for business operations.
          </p>

          <p>
            I focus on writing clean, maintainable code and solving
            complex business problems through scalable software solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;