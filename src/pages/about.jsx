import { Link } from "react-router-dom";
import { GoCodespaces } from "react-icons/go";
import { SiOpencollective } from "react-icons/si";
import "../styles/about.css";
import dp from "../assets/images/Dp-modified.png";

function About() {
  return (
    <main>
      <div className="about-page">
        <marquee>
          <b className="msg">
            Welclome To My Space
            <GoCodespaces className="codespaces-icon" />
          </b>
        </marquee>
        <div className="profile">
          <img src={dp} alt="Princevick" className="dp"/>
          <span>
            <p className="myName">Victor Onipe</p>
            <p className="info">
              I am a software and a Web Developer. I ♥ coding and learning
            </p>
          </span>
        </div>

        <Link to="/home">
          <button>View Repositories</button>
        </Link>

        <div className="descriptions">
          <p className="app-info">
            The <b>GitHub Repositories Portfolio Web App</b> is a showcase of my
            personal GitHub repositories. It provides an organized and
            user-friendly interface for visitors to explore my coding projects,
            view repository details, and understand my technical expertise.
          </p>
          <div className="wrapper">
            <div className="parent-tab">
              <input type="radio" name="tab" id="tab-1" defaultChecked />
              <label htmlFor="tab-1">
                <span>Key Features:</span>
                <div className="icon">
                  <i>
                    <SiOpencollective className="SiOpencollective-icon" />
                  </i>
                </div>
              </label>
              <div className="content">
                <ol>
                  <li>
                    Repository List: Display a paginated list of all my GitHub
                    repositories.
                  </li>
                  <li>
                    Search and Filter: Implement search functionality to find
                    specific repositories by name or other criteria.
                  </li>
                  <li>
                    Single Repo Page: Create separate pages for detailed
                    information about each repository.
                  </li>
                  <li>
                    Error Handling: Gracefully handle errors and display
                    friendly messages.
                  </li>
                  <li>
                    Responsive Design: Ensure the app works seamlessly across
                    different devices.
                  </li>
                </ol>
              </div>
            </div>

            <div className="parent-tab">
              <input type="radio" name="tab" id="tab-2" defaultChecked />
              <label htmlFor="tab-2">
                <span>Why This Project?</span>
                <div className="icon">
                  <i>
                    <SiOpencollective className="SiOpencollective-icon" />
                  </i>
                </div>
              </label>
              <div className="content">
                <ul>
                  <li>
                    As a developer, I want to showcase my work and skills to
                    potential employers, collaborators, and the tech community.
                  </li>
                  <li>
                    Visitors can explore my projects, understand my coding
                    style, and assess my contributions.
                  </li>
                </ul>
              </div>
            </div>

            <div className="parent-tab">
              <input type="radio" name="tab" id="tab-3" defaultChecked />
              <label htmlFor="tab-3">
                <span>Technologies Used:</span>
                <div className="icon">
                  <i>
                    <SiOpencollective className="SiOpencollective-icon" />
                  </i>
                </div>
              </label>
              <div className="content">
                <ul>
                  <li>React (for building the frontend)</li>
                  <li>GitHub API (for fetching repository data)</li>
                  <li>React Router (for navigation)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
