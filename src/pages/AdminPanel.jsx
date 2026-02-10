export default function TaskForm({
  title,
  setTitle,
  description,
  setDescription,
  category,
  setCategory,
  dueDate,
  setDueDate,
  onSubmit,
  editing,
}) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <div className="row">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Work">Work</option>
          <option value="Study">Study</option>
          <option value="Personal">Personal</option>
          <option value="Health">Health</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>

      <button type="submit">{editing ? "Update Task" : "Add Task"}</button>
    </form>
  );
}
