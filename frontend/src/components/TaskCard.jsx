import {
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaCalendarAlt,
  FaFolderOpen,
} from "react-icons/fa";
import { toast } from "react-toastify";
import API from "../services/api";

function TaskCard({
  task,
  fetchTasks,
  setEditingTask,
  setShowEditModal,
}) {

  const handleDelete = async () => {

    const confirmDelete = window.confirm(
      "Delete this task?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(`/tasks/${task._id}`);

     toast.success("Task deleted successfully");

      fetchTasks();

    } catch (error) {
      console.log(error);
    }
  };

  const handleStatus = async () => {

    try {

      await API.patch(`/tasks/${task._id}`);

      toast.success("Task status updated successfully");

      fetchTasks();

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="task-card">

      <div className="task-header">

        <h3>{task.title}</h3>

        <span
          className={`priority ${task.priority.toLowerCase()}`}
        >
          {task.priority}
        </span>

      </div>

      <p className="task-description">
        {task.description}
      </p>

      <div className="task-info">

        <span>

          <FaFolderOpen />

          {task.category}

        </span>

        <span>

          <FaCalendarAlt />

          {task.dueDate
            ? new Date(task.dueDate).toLocaleDateString()
            : "No Due Date"}

        </span>

        <span
          className={`status ${task.status.toLowerCase()}`}
        >
          {task.status}
        </span>

      </div>

      <div className="task-actions">

        <button
          className="edit-btn"
          onClick={() => {

            setEditingTask(task);

            setShowEditModal(true);

          }}
        >

          <FaEdit />

          Edit

        </button>

        <button
          className="complete-btn"
          onClick={handleStatus}
        >

          <FaCheckCircle />

          {task.status === "Pending"
            ? "Complete"
            : "Pending"}

        </button>

        <button
          className="delete-btn"
          onClick={handleDelete}
        >

          <FaTrash />

          Delete

        </button>

      </div>

    </div>

  );
}

export default TaskCard;