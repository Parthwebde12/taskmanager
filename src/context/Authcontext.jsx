import { createContext, useContext, useEffect, useState } from "react";
import { getFromStorage, saveToStorage } from "../utils/storage";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("currentUser");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  function register(email, password, role = "user") {
    const users = getFromStorage("users", []);
    if (users.find((u) => u.email === email)) {
      return { success: false, message: "User already exists" };
    }
    const newUser = { email, password, role };
    users.push(newUser);
    saveToStorage("users", users);
    return { success: true };
  }

  function login(email, password) {
    const users = getFromStorage("users", []);
    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!found) return { success: false, message: "Invalid credentials" };

    localStorage.setItem("currentUser", JSON.stringify(found));
    setUser(found);
    return { success: true };
  }

  function logout() {
    localStorage.removeItem("currentUser");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
