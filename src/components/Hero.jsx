import { motion } from 'framer-motion';
import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="subtitle">Backend Developer</p>

          <h1>
            Hi, I'm <span>Mathesh Ravi</span>
          </h1>

          <h2>
            Building Scalable APIs, Real-Time Systems & Secure Backend Solutions
          </h2>

          <p className="description">
            Backend Developer specializing in Node.js, Express.js,
            MySQL, MSSQL, REST APIs, authentication systems,
            and production issue resolution in live applications.
          </p>

          <div className="hero-buttons">
            <button className="btn">Hire Me</button>
            <button className="btn">Download Resume</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;