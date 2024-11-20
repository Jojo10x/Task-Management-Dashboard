import TaskCard from "./TaskCard";
import PropTypes from "prop-types";

const ListView = ({
  tasks,
  onStatusChange,
  onEdit,
  onDelete,
  getPriorityColor,
  getStatusColor,
}) => (
  <div className="space-y-4">
    {tasks.map((task) => (
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
  </div>
);

ListView.propTypes = {
  tasks: PropTypes.array.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  getPriorityColor: PropTypes.func.isRequired,
  getStatusColor: PropTypes.func.isRequired,
};

export default ListView;
