import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const education = [
    {
      year: "2023 - 2027",
      title: "B.Tech - Electronics & Communication Engineering",
      institute:
        "Vignan's Nirula Institute of Technology and Science for Women",
      score: "CGPA : 8.4 / 10",
    },
    {
      year: "2021 - 2023",
      title: "Intermediate (MPC)",
      institute: "Sri Chaitanya Junior College, Hyderabad",
      score: "Percentage : 92%",
    },
    {
      year: "2020 - 2021",
      title: "SSC",
      institute: "SDR World School, Nandyal",
      score: "Percentage : 99%",
    },
  ];

  return (
    <section id="education" className="education">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Education
      </motion.h2>

      <div className="timeline">
        {education.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>

            <div className="timeline-content">
              <span>{item.year}</span>

              <h3>{item.title}</h3>

              <h4>{item.institute}</h4>

              <p>{item.score}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Education;