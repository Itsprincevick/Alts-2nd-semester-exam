import { FaGithub } from "react-icons/fa";
import HamburgerMenu from "./hamburgerMenu";


function Navbar() {
  return (
    <div className="navbar">
      <div className="git">
        <FaGithub className="github-icon" />
        <h1>Princevick GitHub.</h1>
      </div>
      <HamburgerMenu />
    </div>
  );
}

export default Navbar;
