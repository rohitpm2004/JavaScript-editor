import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import codeRoutes from "./routes/code.routes.js";
import errorHandler from "./middleware/error.middleware.js";

const app = express();

// Database
connectDB();

// Middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

// Routes
app.use("/api/code", codeRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// Error middleware (LAST)
app.use(errorHandler);

export default app;