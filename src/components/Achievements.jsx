import { motion } from "framer-motion";

function Achievements() {
  return (
    <section
  id="achievements"
  className="achievements"
  data-aos="fade-up"
>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Achievements
      </motion.h2>

      <div className="achievement-grid">

        <div className="achievement-card">
          <h3>🏆 Infosys Springboard Internship</h3>
          <p>Successfully completed AI & ML Virtual Internship.</p>
        </div>

        <div className="achievement-card">
          <h3>📚 Academic Projects</h3>
          <p>Completed multiple Machine Learning and Deep Learning projects.</p>
        </div>

        <div className="achievement-card">
          <h3>💻 Python Programming</h3>
          <p>Strong foundation in Python, AI, ML and Web Development.</p>
        </div>

      </div>

    </section>
  );
}

export default Achievements;