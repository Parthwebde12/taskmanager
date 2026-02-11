import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h3>TaskManager</h3>
      <div>
        <button onClick={toggleTheme}>Theme</button>
        {user?.role === "admin" && <Link to="/admin">Admin</Link>}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
