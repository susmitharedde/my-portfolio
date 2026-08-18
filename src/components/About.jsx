import { motion } from "framer-motion";

function About() {
  const details = [
    {
      title: "Name",
      value: "Bandi Susmitha Reddy",
    },
    {
      title: "Degree",
      value: "B.Tech – Electronics & Communication Engineering",
    },
    {
      title: "College",
      value: "Vignan's Nirula Institute of Technology and Science for Women",
    },
    {
      title: "CGPA",
      value: "8.4 / 10",
    },
    {
      title: "Location",
      value: "Andhra Pradesh, India",
    },
  ];

  return (
    <section id="about" className="about">

      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <h2>About Me</h2>

        <p>
          Hello! I'm <strong>Bandi Susmitha Reddy</strong>, a Final Year
          Electronics and Communication Engineering student passionate about
          Software Development, Artificial Intelligence, Machine Learning,
          IoT and Embedded Systems.
        </p>

        <p>
          I enjoy developing intelligent software applications and hardware
          solutions that solve real-world problems. My goal is to build
          innovative technology solutions while continuously improving my
          technical and problem-solving skills.
        </p>
      </motion.div>

      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        {details.map((item, index) => (
          <div className="about-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </motion.div>

    </section>
  );
}

export default About;