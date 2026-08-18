import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={sticky ? "navbar active" : "navbar"}>
      <h2 className="logo">
        Susmitha<span>.</span>
      </h2>

      <ul className={menu ? "nav-links open" : "nav-links"}>

        <li><Link to="hero" smooth duration={500}>Home</Link></li>

        <li><Link to="about" smooth duration={500}>About</Link></li>

        <li><Link to="skills" smooth duration={500}>Skills</Link></li>

        <li><Link to="education" smooth duration={500}>Education</Link></li>

        <li><Link to="internship" smooth duration={500}>Internship</Link></li>

        <li><Link to="projects" smooth duration={500}>Projects</Link></li>

        <li><Link to="contact" smooth duration={500}>Contact</Link></li>

      </ul>

      <div
        className="menu-btn"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;