import { useEffect, useMemo, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import Filters from "../components/Filters";
import { getFromStorage, saveToStorage } from "../utils/storage";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Work");
  const [dueDate, setDueDate] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  const [filter, setFilter] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  useEffect(() => {
    const saved = getFromStorage("tasks", []);
    setTasks(saved);
  }, []);

  useEffect(() => {
    saveToStorage("tasks", tasks);
  }, [tasks]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !description.trim()) return;

    if (editingTask) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === editingTask.id
            ? { ...t, title, description, category, dueDate }
            : t,
        ),
      );
      setEditingTask(null);
    } else {
      setTasks((prev) => [
        ...prev,
        {
          id: Date.now(),
          title,
          description,
          category,
          dueDate,
          completed: false,
        },
      ]);
    }

    setTitle("");
    setDescription("");
    setCategory("Work");
    setDueDate("");
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      ),
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function editTask(task) {
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description);
    setCategory(task.category);
    setDueDate(task.dueDate);
  }

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const statusMatch =
        filter === "all"
          ? true
          : filter === "completed"
            ? task.completed
            : !task.completed;

      const categoryMatch =
        filterCategory === "all" ? true : task.category === filterCategory;

      return statusMatch && categoryMatch;
    });
  }, [tasks, filter, filterCategory]);

  return (
    <div className="dashboard">
      <h2>Task Dashboard</h2>

      <TaskForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        category={category}
        setCategory={setCategory}
        dueDate={dueDate}
        setDueDate={setDueDate}
        onSubmit={handleSubmit}
        editing={!!editingTask}
      />

      <Filters
        filter={filter}
        setFilter={setFilter}
        category={filterCategory}
        setCategory={setFilterCategory}
      />

      <div>
        <h3>Your Tasks</h3>
        {filteredTasks.length === 0 && <p>No tasks found.</p>}
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        ))}
      </div>
    </div>
)}