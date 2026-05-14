require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// const authRoutes = require("./routes/auth");
// const taskRoutes = require("./routes/tasks");
// const userRoutes = require("./routes/users");

const app = express();


app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());


// app.use("/api/auth",  authRoutes);
// app.use("/api/tasks", taskRoutes);
// app.use("/api/users", userRoutes);


app.get("/api/health", (_, res) => res.json({ status: "ok", ts: Date.now() }));


app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
});


const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("  MongoDB connected");
    app.listen(PORT, () => console.log(`  Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error(" MongoDB connection error:", err.message);
    process.exit(1);
  });