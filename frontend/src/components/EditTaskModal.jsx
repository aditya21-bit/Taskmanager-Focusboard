import { useState, useEffect } from "react";
import API from "../services/api";

function EditTaskModal({
  task,
  show,
  closeModal,
  fetchTasks,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Study");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setDescription(task.description || "");
      setCategory(task.category || "Study");
      setPriority(task.priority || "Medium");

      if (task.dueDate) {
        setDueDate(task.dueDate.substring(0, 10));
      } else {
        setDueDate("");
      }
    }
  }, [task]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/tasks/${task._id}`, {
        title,
        description,
        category,
        priority,
        dueDate,
      });

      fetchTasks();
      closeModal();

    } catch (error) {
      console.log(error);
      alert("Failed to update task");
    }
  };

  if (!show || !task) return null;

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Edit Task</h2>

        <form onSubmit={handleUpdate}>

          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >
            <option value="Study">Study</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </select>

          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value)
            }
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <input
            type="date"
            value={dueDate}
            onChange={(e) =>
              setDueDate(e.target.value)
            }
          />

          <div className="modal-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={closeModal}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditTaskModal;