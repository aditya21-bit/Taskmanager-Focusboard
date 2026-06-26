import {
  FaTasks,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

function StatCard({ title, count }) {

  let icon;
  let description = "";

  switch (title) {

    case "Total Tasks":
      icon = <FaTasks />;
      description = "Manage all your tasks";
      break;

    case "Pending Tasks":
      icon = <FaClock />;
      description = "Need your attention";
      break;

    case "Completed Tasks":
      icon = <FaCheckCircle />;
      description = "Great work!";
      break;

    default:
      icon = <FaTasks />;
  }

  return (
    <div className="stat-card">

      <div className="stat-header">

        <div className="stat-icon">
          {icon}
        </div>

        <h2>{count}</h2>

      </div>

      <h3>{title}</h3>

      <p>{description}</p>

    </div>
  );
}

export default StatCard;