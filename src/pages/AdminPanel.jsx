import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(stored);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Admin Panel</h2>
        {users.map((u, i) => (
          <div key={i} className="card">
            <p><strong>Name:</strong> {u.name}</p>
            <p><strong>Email:</strong> {u.email}</p>
            <p><strong>Role:</strong> {u.role}</p>
          </div>
        ))}
      </div>
    </>
  );
}
