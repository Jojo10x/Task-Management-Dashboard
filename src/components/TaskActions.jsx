import PropTypes from "prop-types";
import { Plus } from "lucide-react";

const TaskActions = ({ showForm, setShowForm, setEditingTask }) => {
  return (
    <button
      className="mb-6 bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
      onClick={() => {
        setEditingTask(null);
        setShowForm(!showForm);
      }}
    >
      <Plus size={20} />
      Add New Task
    </button>
  );
};

TaskActions.propTypes = {
  showForm: PropTypes.bool.isRequired,
  setShowForm: PropTypes.func.isRequired,
  setEditingTask: PropTypes.func.isRequired,
};

export default TaskActions;
