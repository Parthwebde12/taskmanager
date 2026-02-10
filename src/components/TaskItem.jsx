export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <div>
        <h4 style={{ margin: "0 0 4px" }}>{task.title}</h4>
        <small>{task.description}</small>
        <div style={{ marginTop: 6, display: "flex", gap: 8 }}>
          <span className="badge">{task.category}</span>
          <span className="badge">Due: {task.dueDate}</span>
        </div>
      </div>
      <div className="row">
        <button onClick={() => onToggle(task.id)}>✓</button>
        <button className="secondary" onClick={() => onEdit(task)}>
          Edit
        </button>
        <button className="danger" onClick={() => onDelete(task.id)}>
          ✕
        </button>
      </div>
    </div>
  );
}
