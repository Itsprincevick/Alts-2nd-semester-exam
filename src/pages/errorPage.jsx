import oops from "../assets/oops.svg";
import "../styles/error.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="error-page">
      <div className="error-container">
        <img src={oops} alt="404" className="oops-image" />
        <h2>404 - Not Found</h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link to="/home"><button>GO TO HOMEPAGE</button></Link>
      </div>
    </div>
  );
}

export default NotFound;
