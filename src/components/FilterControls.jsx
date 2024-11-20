import PropTypes from "prop-types";
const FilterControls = ({ filters, setFilters }) => (
  <div className="grid grid-cols-3 gap-4 mb-6">
    <select
      className="p-2 border rounded"
      onChange={(e) => setFilters({ ...filters, status: e.target.value })}
    >
      <option value="all">All Status</option>
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>

    <select
      className="p-2 border rounded"
      onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
    >
      <option value="all">All Priorities</option>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
    </select>

    <select
      className="p-2 border rounded"
      onChange={(e) => setFilters({ ...filters, assignedTo: e.target.value })}
    >
      <option value="all">All Users</option>
      <option value="Alice Brown">Alice Brown</option>
      <option value="Bob Green">Bob Green</option>
    </select>
  </div>
);

FilterControls.propTypes = {
  filters: PropTypes.shape({
    status: PropTypes.string,
    priority: PropTypes.string,
    assignedTo: PropTypes.string,
  }),
  setFilters: PropTypes.func,
};

export default FilterControls;
