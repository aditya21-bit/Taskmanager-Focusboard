import { useState } from "react";
import API from "../services/api";

function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Study");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks", {
        title,
        description,
        category,
        priority,
        dueDate,
      });

      // Clear form
      setTitle("");
      setDescription("");
      setCategory("Study");
      setPriority("Medium");
      setDueDate("");

      // Refresh tasks
      fetchTasks();

    } catch (error) {
      console.log(error);
      alert("Failed to create task");
    }
  };

  return (
    
  <div className="task-form">

    <h2>Create New Task</h2>

    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label>Task Title</label>

        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Description</label>

        <textarea
          placeholder="Describe your task..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="row">

        <div className="form-group">
          <label>Category</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Study</option>
            <option>Work</option>
            <option>Personal</option>
          </select>
        </div>

        <div className="form-group">
          <label>Priority</label>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

      </div>

      <div className="form-group">
        <label>Due Date</label>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <button
        className="create-btn"
        type="submit"
      >
        + Create Task
      </button>

    </form>

  </div>
  );
}

export default TaskForm;