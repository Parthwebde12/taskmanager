export default function Filters({ filter, setFilter, category, setCategory }) {
  return (
    <div className="row" style={{ margin: "10px 0" }}>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="Work">Work</option>
        <option value="Study">Study</option>
        <option value="Personal">Personal</option>
        <option value="Health">Health</option>
      </select>
    </div>
  );
}
