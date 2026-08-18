import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

function Certificates() {
  return (
    <section
      id="certificates"
      className="certificates"
      data-aos="fade-up"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Certifications
      </motion.h2>

      <div className="certificate-grid">

        <div className="certificate-card">
          <FaCertificate className="cert-icon" />
          <h3>Infosys Springboard</h3>
          <h4>Artificial Intelligence & Machine Learning</h4>
          <p>
            Successfully completed the Artificial Intelligence &
            Machine Learning Virtual Internship offered by Infosys
            Springboard.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Certificates;