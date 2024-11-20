import PropTypes from "prop-types";
import { List, LayoutGrid } from "lucide-react";

const ViewToggle = ({ viewMode, setViewMode }) => {
  return (
    <div className="relative">
      <div className="sm:hidden">
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-white shadow-lg rounded-full p-1.5 ">
            <div className="flex flex-col gap-2">
              <button
                className={`group flex items-center ${
                  viewMode === "list"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600"
                } rounded-full p-3 transition-all duration-200 hover:bg-blue-500 hover:text-white`}
                onClick={() => setViewMode("list")}
                title="List View"
              >
                <List size={22} />
                <span
                  className={`
                  absolute right-full mr-2 px-2 py-1 rounded-lg text-sm font-medium
                  bg-gray-800 text-white transform scale-0 -translate-x-2 opacity-0
                  group-hover:scale-100 group-hover:translate-x-0 group-hover:opacity-100
                  transition-all duration-200 whitespace-nowrap
                `}
                >
                  List View
                </span>
              </button>
              <button
                className={`group flex items-center ${
                  viewMode === "kanban"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600"
                } rounded-full p-3 transition-all duration-200 hover:bg-blue-500 hover:text-white`}
                onClick={() => setViewMode("kanban")}
                title="Kanban View"
              >
                <LayoutGrid size={22} />
                <span
                  className={`
                  absolute right-full mr-2 px-2 py-1 rounded-lg text-sm font-medium
                  bg-gray-800 text-white transform scale-0 -translate-x-2 opacity-0
                  group-hover:scale-100 group-hover:translate-x-0 group-hover:opacity-100
                  transition-all duration-200 whitespace-nowrap
                `}
                >
                  Kanban View
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="bg-white/90 backdrop-blur-sm shadow-md rounded-xl p-1">
          <div className="flex gap-1">
            <button
              className={`
                flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium
                transition-all duration-200 
                ${
                  viewMode === "list"
                    ? "bg-blue-500 text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
              onClick={() => setViewMode("list")}
            >
              <List size={18} className="mr-2" />
              List
            </button>
            <button
              className={`
                flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium
                transition-all duration-200
                ${
                  viewMode === "kanban"
                    ? "bg-blue-500 text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
              onClick={() => setViewMode("kanban")}
            >
              <LayoutGrid size={18} className="mr-2" />
              Kanban
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ViewToggle.propTypes = {
  viewMode: PropTypes.oneOf(["list", "kanban"]).isRequired,
  setViewMode: PropTypes.func.isRequired,
};

const DashboardLayout = ({ viewMode, setViewMode, children }) => {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Task Management Dashboard</h1>
        <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
      </div>
      {children}
    </div>
  );
};

DashboardLayout.propTypes = {
  viewMode: PropTypes.oneOf(["list", "kanban"]).isRequired,
  setViewMode: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
