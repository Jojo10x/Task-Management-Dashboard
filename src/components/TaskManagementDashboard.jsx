import  { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import TaskForm from "./TaskForm";
import FilterControls from "./FilterControls";
import KanbanBoard from "./KanbanBoard";
import ListView from "./ListView";
import ProgressBar from "./ProgressBar";
import TaskActions from "./TaskActions";
import taskUtils from "../utils/taskUtils";
import { initialTasks } from "../data/tasks";

const TaskManagementDashboard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [filters, setFilters] = useState({
    status: "all",
    priority: "all",
    assignedTo: "all",
  });
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [viewMode, setViewMode] = useState("list");

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    setShowForm(false);
  };

  const handleEditTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setEditingTask(null);
    setShowForm(false);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleStatusChange = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Completed" ? "Pending" : "Completed",
            }
          : task
      )
    );
  };

  const filteredTasks = taskUtils.filterTasks(tasks, filters);
  const completionPercentage = taskUtils.calculateCompletionPercentage(tasks);

  return (
    <DashboardLayout viewMode={viewMode} setViewMode={setViewMode}>
      <ProgressBar percentage={completionPercentage} />
      <FilterControls filters={filters} setFilters={setFilters} />
      <TaskActions 
        showForm={showForm} 
        setShowForm={setShowForm}
        setEditingTask={setEditingTask}
      />

      {showForm && (
        <TaskForm
          task={editingTask}
          onSubmit={editingTask ? handleEditTask : handleAddTask}
          onCancel={() => {
            setShowForm(false);
            setEditingTask(null);
          }}
          isEditing={!!editingTask}
        />
      )}

      {viewMode === "kanban" ? (
        <KanbanBoard
          tasks={filteredTasks}
          onStatusChange={handleStatusChange}
          onEdit={(task) => {
            setEditingTask(task);
            setShowForm(true);
          }}
          onDelete={handleDeleteTask}
          getPriorityColor={taskUtils.getPriorityColor}
          getStatusColor={taskUtils.getStatusColor}
        />
      ) : (
        <ListView
          tasks={filteredTasks}
          onStatusChange={handleStatusChange}
          onEdit={(task) => {
            setEditingTask(task);
            setShowForm(true);
          }}
          onDelete={handleDeleteTask}
          getPriorityColor={taskUtils.getPriorityColor}
          getStatusColor={taskUtils.getStatusColor}
        />
      )}
    </DashboardLayout>
  );
};

export default TaskManagementDashboard;