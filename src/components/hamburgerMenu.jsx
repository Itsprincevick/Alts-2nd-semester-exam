
import { useState } from "react"; // Importing the useState hook from React
import { FaGithub } from "react-icons/fa"; // Importing the Github icon from react-icons
import { FaSquareXTwitter } from "react-icons/fa6"; // Importing the Twitter icon from react-icons
import { FaLinkedin } from "react-icons/fa6"; // Importing the LinkedIn icon from react-icons
import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom

function HamburgerMenu() {
  // Declaring a state variable "isOpen" to keep track of whether the menu is open or not
  const [isOpen, setIsOpen] = useState(false);

  // Declaring a function "toggleMenu" to toggle the menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Returning the JSX code for the HamburgerMenu component
  return (
    <div className="nav">
      {/* Creating a checkbox input to handle the menu open/close state */}
      <input
        type="checkbox"
        id="navbar-checkbox"
        className="navbar-checkbox"
        checked={isOpen}
        onChange={toggleMenu}
      />
      {/* Creating a label for the checkbox input to display the hamburger menu icon */}
      <label
        htmlFor="navbar-checkbox"
        className={isOpen ? "navbar-toggle close" : "navbar-toggle"}
      >
        {/* Creating three lines to represent the hamburger menu icon */}
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </label>
      {/* Creating a nav element to display the menu items */}
      <nav className={isOpen ? "navbar-menu open" : "navbar-menu"}>
        {/* Displaying the menu title */}
        <h2>Menu</h2>
        {/* Creating a list of menu items */}
        <ul>
          <li>
            {/* Creating a link to the home page */}
            <Link to="/home" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            {/* Creating a link to the about page */}
            <Link to="/" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            {/* Creating a link to the error page */}
            <Link to="/errorPage" onClick={toggleMenu}>
              Errorpage
            </Link>
          </li>
        </ul>
        {/* Displaying the social media links */}
        <h2>Prince&apos;s Social</h2>
        <ul className="socials">
          <li>
            {/* Creating a link to the Github profile */}
            <a
              href="https://github.com/itsprincevick"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" alt="Github Icon" />
            </a>
          </li>
          <li>
            {/* Creating a link to the Twitter profile */}
            <a
              href="https://twitter.com/itsprincevick"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="social-icon" alt="Twitter Icon" />
            </a>
          </li>
          <li>
            {/* Creating a link to the LinkedIn profile */}
            <a
              href="https://www.linkedin.com/in/victor-onipe-a34661288"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" alt="Linkedin Icon" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;