import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

function Internship() {
  return (
    <section id="internship" className="internship">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Internship
      </motion.h2>

      <motion.div
        className="internship-card"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
      >

        <div className="internship-icon">
          <FaBriefcase />
        </div>

        <div className="internship-content">

          <h3>Infosys Springboard Virtual Internship</h3>

          <span>
            <FaCalendarAlt />
            January 2026 – March 2026
          </span>

          <h4>Artificial Intelligence & Machine Learning</h4>

          <p>
            Successfully completed an AI & Machine Learning Virtual Internship
            through Infosys Springboard, where I worked on developing a
            Machine Learning Based Phishing Website Detection System using
            Python, Pandas, NumPy and Scikit-learn.
          </p>

        </div>

      </motion.div>

    </section>
  );
}

export default Internship;