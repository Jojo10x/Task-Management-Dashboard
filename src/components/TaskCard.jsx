import { Edit2, Trash2, CheckCircle, Calendar, User } from "lucide-react";
import PropTypes from "prop-types";

const TaskCard = ({
  task,
  onStatusChange,
  onEdit,
  onDelete,
  getPriorityColor,
  getStatusColor,
}) => {
  const formatDate = (date) => {
    const d = new Date(date);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (d.toDateString() === today.toDateString()) {
      return `Today, ${d.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    }
    if (d.toDateString() === tomorrow.toDateString()) {
      return `Tomorrow, ${d.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    }
    return d.toLocaleDateString([], {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="p-3 sm:p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span
          className={`order-2 sm:order-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
            task.status
          )}`}
        >
          {task.status}
        </span>
        <span
          className={`order-3 sm:order-2 px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
            task.priority
          )}`}
        >
          {task.priority}
        </span>

        <div className="order-1 sm:order-3 flex gap-1 ml-auto">
          <button
            title="Mark Complete"
            className="p-1.5 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
            onClick={() => onStatusChange(task.id)}
          >
            <CheckCircle size={18} />
          </button>
          <button
            title="Edit Task"
            className="p-1.5 rounded-full text-gray-500 hover:text-yellow-600 hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all"
            onClick={() => onEdit(task)}
          >
            <Edit2 size={18} />
          </button>
          <button
            title="Delete Task"
            className="p-1.5 rounded-full text-gray-500 hover:text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all"
            onClick={() => onDelete(task.id)}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
        {task.task}
      </h3>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1.5">
          <User size={16} className="text-gray-400" />
          <span className="truncate">{task.assignedTo}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar size={16} className="text-gray-400" />
          <span>{formatDate(task.dueDate)}</span>
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    task: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    assignedTo: PropTypes.string.isRequired,
    dueDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
      .isRequired,
  }).isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  getPriorityColor: PropTypes.func.isRequired,
  getStatusColor: PropTypes.func.isRequired,
};

export default TaskCard;
