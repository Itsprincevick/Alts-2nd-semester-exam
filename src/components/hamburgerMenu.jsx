import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom"


function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <input
        type="checkbox"
        id="navbar-checkbox"
        className="navbar-checkbox"
        checked={isOpen}
        onChange={toggleMenu}
      />
      <label
        htmlFor="navbar-checkbox"
        className={isOpen ? "navbar-toggle close" : "navbar-toggle"}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </label>
      <nav className={isOpen ? "navbar-menu open" : "navbar-menu"}>
        <h2>Menu</h2>
        <ul>
          <li>
            <Link to="/home" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/" onClick={toggleMenu}>About </Link>
          </li>
          <li>
            <Link to="/errorPage" onClick={toggleMenu}>Errorpage</Link>
          </li>
        </ul>
        <h2>Prince&apos;s Social</h2>
        <ul className="socials">
            <li><a href="https://github.com/itsprincevick" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon"  alt="Github Icon"/>
            </a></li>
            <li><a href="https://twitter.com/itsprincevick" target="_blank"rel="noopener noreferrer">
            <FaSquareXTwitter className="social-icon" alt="Twitter Icon"/>
            </a></li>
            <li><a href="https://www.linkedin.com/in/victor-onipe-a34661288" target="_blank"rel="noopener noreferrer">
            <FaLinkedin className="social-icon" alt="Linkedin Icon"/>
            </a></li>
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
