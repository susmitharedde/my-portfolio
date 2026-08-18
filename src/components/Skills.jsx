import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaGitAlt,
  FaGithub,
  FaTools,
  FaUsers,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      title: "Programming",
      icon: <FaPython />,
      items: ["Python", "Java (Basic)"],
    },
    {
      title: "Web Technologies",
      icon: <FaHtml5 />,
      items: ["HTML"],
    },
    {
      title: "Version Control",
      icon: <FaGitAlt />,
      items: ["Git", "GitHub"],
    },
    {
      title: "Development Tools",
      icon: <FaTools />,
      items: ["Visual Studio Code"],
    },
    {
      title: "Productivity Tools",
      icon: <FaGithub />,
      items: ["MS Word", "MS Excel", "MS PowerPoint"],
    },
    {
      title: "Soft Skills",
      icon: <FaUsers />,
      items: ["Problem Solving", "Communication", "Adaptability"],
    },
  ];

  return (
    <section id="skills" className="skills">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Technical Skills
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ y: -8 }}
          >
            <div className="skill-icon">{skill.icon}</div>

            <h3>{skill.title}</h3>

            {skill.items.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Skills;