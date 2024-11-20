const taskUtils = {
    getPriorityColor: (priority) => {
      switch (priority.toLowerCase()) {
        case "high":
          return "bg-red-100 text-red-800";
        case "medium":
          return "bg-yellow-100 text-yellow-800";
        case "low":
          return "bg-green-100 text-green-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    },
  
    getStatusColor: (status) => {
      switch (status.toLowerCase()) {
        case "completed":
          return "bg-blue-100 text-blue-800";
        case "in progress":
          return "bg-purple-100 text-purple-800";
        case "pending":
          return "bg-orange-100 text-orange-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    },
  
    filterTasks: (tasks, filters) => {
      return tasks.filter((task) => {
        return (
          (filters.status === "all" || task.status === filters.status) &&
          (filters.priority === "all" || task.priority === filters.priority) &&
          (filters.assignedTo === "all" || task.assignedTo === filters.assignedTo)
        );
      });
    },
  
    calculateCompletionPercentage: (tasks) => {
      return (tasks.filter((task) => task.status === "Completed").length / tasks.length) * 100;
    }
  };
  
  export default taskUtils;