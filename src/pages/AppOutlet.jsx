import { Outlet } from "react-router-dom"; // Importing the Outlet component from react-router-dom

/**
 * AppOutlet component
 * 
 * This component is used to wrap the child routes of the application.
 * It renders the Outlet component from react-router-dom, which is used to render the child routes.
 *
 * @returns {JSX.Element} - The JSX element for the AppOutlet component
 */
function AppOutlet() {
  return (
    <div>
      <Outlet /> {/* Rendering the child routes */}
    </div>
  );
}

export default AppOutlet; // Exporting the AppOutlet component for use in other files