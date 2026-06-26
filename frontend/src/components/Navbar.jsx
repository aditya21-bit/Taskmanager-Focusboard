import { FaBars, FaBell } from "react-icons/fa";

function Navbar({ setSidebarOpen }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="navbar">

      {/* Left Side */}
      <div className="navbar-left">

        <div
          className="hamburger"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </div>

        <div>
          <h1>
            Welcome Back,
            {user?.name ? ` ${user.name}` : " User"} 👋
          </h1>

          <p>Stay organized and achieve more today.</p>
        </div>

      </div>

      {/* Right Side */}
      <div className="navbar-right">

        <div className="date-box">
          {today}
        </div>

        <div className="notification">
          <FaBell />
        </div>

        <div className="avatar">
          {user?.name
            ? user.name.charAt(0).toUpperCase()
            : "U"}
        </div>

      </div>

    </div>
  );
}

export default Navbar;