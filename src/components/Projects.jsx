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