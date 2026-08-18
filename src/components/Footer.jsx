import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>Bandi Susmitha Reddy</h2>

      <p>
        Final Year Electronics & Communication Engineering Student |
        AI & ML Enthusiast | Software & Embedded Systems Developer
      </p>

      <div className="footer-icons">
        <a href="https://github.com/your-github" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="mailto:your_email@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <a href="#home" className="top-btn">
        <FaArrowUp />
      </a>

      <p className="copyright">
        © 2026 Bandi Susmitha Reddy. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;