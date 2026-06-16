import { motion } from 'framer-motion';
import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        {/* Left Side */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="subtitle">Backend Developer</p>

          <h1>
            Hi, I'm <span>Mathesh R</span>
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
            <a href="#contact" className="btn">
              Hire Me
            </a>

            <a href="/Software_Developer3.pdf" download className="btn">
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="profile-frame">
            <img
              src="/mathesh_profile.jpeg"
              alt="Mathesh Profile"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;