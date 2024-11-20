import PropTypes from "prop-types";
import TaskCard from "./TaskCard";

const KanbanBoard = ({
  tasks,
  onStatusChange,
  onEdit,
  onDelete,
  getPriorityColor,
  getStatusColor,
}) => {
  const columns = ["Pending", "In Progress", "Completed"];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {columns.map((column) => (
        <div key={column} className="bg-gray-50 p-3 sm:p-4 rounded-lg">
          <h3 className="font-semibold mb-3 text-center">{column}</h3>
          <div className="space-y-3 sm:space-y-4">
            {tasks
              .filter((task) => task.status === column)
              .map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onStatusChange={onStatusChange}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  getPriorityColor={getPriorityColor}
                  getStatusColor={getStatusColor}
                />
              ))}
            {tasks.filter((task) => task.status === column).length === 0 && (
              <div className="text-center text-gray-500 italic py-2">
                No tasks
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

KanbanBoard.propTypes = {
  tasks: PropTypes.array.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  getPriorityColor: PropTypes.func.isRequired,
  getStatusColor: PropTypes.func.isRequired,
};

export default KanbanBoard;
