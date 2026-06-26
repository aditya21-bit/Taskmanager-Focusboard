import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import SearchBar from "../components/SearchBar";
import FilterTabs from "../components/FilterTabs";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import EditTaskModal from "../components/EditTaskModal";
import API from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priority, setPriority] = useState("All");

  const [editingTask, setEditingTask] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fetch Tasks
  const fetchTasks = async () => {
    try {
      const response = await API.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Search + Filters
  const filteredTasks = tasks.filter((task) => {
    const searchMatch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" ||
      task.category === category;

    const priorityMatch =
      priority === "All" ||
      task.priority === priority;

    return (
      searchMatch &&
      categoryMatch &&
      priorityMatch
    );
  });

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="main-content">

        {/* Navbar */}
        <Navbar
          setSidebarOpen={setSidebarOpen}
        />

        {/* Statistics */}
        <div className="stats-section">

          <StatCard
            title="Total Tasks"
            count={tasks.length}
          />

          <StatCard
            title="Pending Tasks"
            count={
              tasks.filter(
                (task) =>
                  task.status === "Pending"
              ).length
            }
          />

          <StatCard
            title="Completed Tasks"
            count={
              tasks.filter(
                (task) =>
                  task.status === "Completed"
              ).length
            }
          />

        </div>

        {/* Create Task */}
        <TaskForm fetchTasks={fetchTasks} />

        {/* Search */}
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* Filters */}
        <FilterTabs
          category={category}
          setCategory={setCategory}
          priority={priority}
          setPriority={setPriority}
        />

        {/* Tasks */}
        {filteredTasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            fetchTasks={fetchTasks}
            setEditingTask={setEditingTask}
            setShowEditModal={setShowEditModal}
          />
        ))}

        {/* Empty State */}
        {filteredTasks.length === 0 && (
          <p>No tasks available.</p>
        )}

        {/* Edit Modal */}
        <EditTaskModal
          task={editingTask}
          show={showEditModal}
          closeModal={() =>
            setShowEditModal(false)
          }
          fetchTasks={fetchTasks}
        />

      </div>

    </div>
  );
}

export default Dashboard;