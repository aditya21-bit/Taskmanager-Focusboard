import { useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaTasks,
  FaCheckCircle,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className={sidebarOpen ? "sidebar active" : "sidebar"}>

      {/* Close Button (Mobile Only) */}
      <div
        className="close-btn"
        onClick={() => setSidebarOpen(false)}
      >
        <FaTimes />
      </div>

      {/* Logo */}
      <div className="logo">
        <h2>FocusBoard</h2>
      </div>

      {/* Menu */}
      <ul className="menu">

        <li className="active">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </li>

        <li>
          <FaTasks />
          <span>Tasks</span>
        </li>

        <li>
          <FaCheckCircle />
          <span>Completed</span>
        </li>

        <li onClick={handleLogout}>
          <FaSignOutAlt />
          <span>Logout</span>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;