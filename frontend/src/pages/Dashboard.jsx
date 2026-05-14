import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import Filters from "../components/Filters";
import { useAuth } from "../context/Authcontext";

export default function Dashboard() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(`tasks_${user.email}`)) || [];
    setTasks(stored);
  }, [user.email]);

  useEffect(() => {
    localStorage.setItem(`tasks_${user.email}`, JSON.stringify(tasks));
  }, [tasks, user.email]);

  const addTask = (task) => {
    setTasks([{ ...task, id: Date.now(), completed: false }, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks =
    filter === "completed"
      ? tasks.filter((t) => t.completed)
      : filter === "pending"
      ? tasks.filter((t) => !t.completed)
      : tasks;

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Welcome, {user.name}</h2>
        <TaskForm onAdd={addTask} />
        <Filters filter={filter} setFilter={setFilter} />
        {filteredTasks.length === 0 && <p>No tasks found</p>}
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </>
  );
}
