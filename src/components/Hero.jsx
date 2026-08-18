import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="hero" className="hero" data-aos="fade-up">
      <div className="hero-left">

        <motion.p
          className="hello"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          BANDI
          <br />
          <span>SUSMITHA REDDY</span>
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Final Year B.Tech (ECE) Student
        </motion.h3>

        <p className="hero-text">
          Final Year Electronics and Communication Engineering student passionate
          about Software Development, Artificial Intelligence, Machine Learning,
          IoT, and Embedded Systems. I enjoy designing intelligent software
          applications and hardware-based solutions that solve real-world
          challenges while continuously learning and adapting to emerging
          technologies.
        </p>

        <div className="hero-buttons">

          <a href="/resume.pdf" download>
            <FaDownload />
            <span>Download Resume</span>
          </a>

          <a href="#contact">
            Contact Me
          </a>

        </div>

        <div className="social-icons">

          <a
            href="https://github.com/susmitharedde"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/bandi-susmitha-redd"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      <div className="hero-right">

        <motion.div
          className="profile-circle"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/profile.jpeg"
            alt="Bandi Susmitha Reddy"
          />
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;