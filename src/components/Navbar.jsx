import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { useTheme } from "/src/context/ThemeContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="navbar">
      <h3>TaskFlow Pro</h3>
      <div className="right">
        <span className="badge">{user.role.toUpperCase()}</span>
        <button className="secondary" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        {user.role === "admin" && (
          <button onClick={() => navigate("/admin")}>Admin</button>
        )}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
