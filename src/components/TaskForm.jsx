import { useState } from "react";
import PropTypes from "prop-types";
const TaskForm = ({ task, onSubmit, onCancel, isEditing }) => {
  const [formData, setFormData] = useState(
    task || {
      task: "",
      assignedTo: "",
      dueDate: "",
      priority: "Medium",
      status: "Pending",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Task Name"
          className="p-2 border rounded"
          value={formData.task}
          onChange={(e) => setFormData({ ...formData, task: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Assigned To"
          className="p-2 border rounded"
          value={formData.assignedTo}
          onChange={(e) =>
            setFormData({ ...formData, assignedTo: e.target.value })
          }
          required
        />
        <input
          type="datetime-local"
          className="p-2 border rounded"
          value={formData.dueDate}
          onChange={(e) =>
            setFormData({ ...formData, dueDate: e.target.value })
          }
          required
        />
        <select
          className="p-2 border rounded"
          value={formData.priority}
          onChange={(e) =>
            setFormData({ ...formData, priority: e.target.value })
          }
        >
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>
        {isEditing && (
          <select
            className="p-2 border rounded"
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        )}
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          className="px-4 py-2 border rounded"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  );
};

TaskForm.propTypes = {
  task: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
};

export default TaskForm;
