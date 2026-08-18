import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
  id="contact"
  className="contact"
  data-aos="fade-up"
>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Contact Me
      </motion.h2>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            I'm always interested in internships, full-time opportunities,
            collaborations, and AI/ML projects.
          </p>

          <div className="contact-item">
            <FaEnvelope />
            <span>susmithardybandi@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaPhone />
            <span>+91 9390032533</span>
          </div>

          <div className="contact-social">

            <a href="https://github.com/susmitharedde">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/bandi-susmitha-reddy">
              <FaLinkedin />
            </a>

          </div>

        </div>

        <form className="contact-form">

          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button>Send Message</button>

        </form>

      </div>

    </section>
  );
}

export default Contact;