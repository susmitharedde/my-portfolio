import { motion } from "framer-motion";

const projects = [
  {
    title: "Phishing Website Detection",
    tech: ["Python", "Machine Learning", "Flask"],
    desc: "Developed a machine learning system to detect phishing websites using extracted URL features."
  },
  {
    title: "Library Management System",
    tech: ["Python"],
    desc: "Developed a Library Management System for managing books, members, issue/return operations, and maintaining library records."
  },
  {
    title: "IoT-Enabled Smart Home Monitoring",
    tech: ["IoT", "Sensors", "Embedded Systems"],
    desc: "Designed a smart home monitoring system to monitor and control home appliances using IoT technology."
  },
  {
    title: "Python Calculator",
    tech: ["Python"],
    desc: "Developed a command-line calculator that performs basic arithmetic operations such as addition, subtraction, multiplication, and division with user-friendly input handling."
  },
  {
    title: "Password Generator",
    tech: ["Python"],
    desc: "Built a secure password generator that creates strong random passwords using uppercase letters, lowercase letters, numbers, and special characters."
  },
  {
    title: "To-Do List Application",
    tech: ["Python"],
    desc: "Created a console-based To-Do List application to add, update, delete, and manage daily tasks efficiently using Python."
  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="projects"
      data-aos="fade-up"
    >
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ y: -10 }}
          >
            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="tech-stack">
              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;