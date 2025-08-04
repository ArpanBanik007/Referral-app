// app.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import Dashboard from "./routes/internRoutes.js";

dotenv.config();

const app = express();

// ✅ Get current __dirname (correct way)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ CORS setup
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

// ✅ Body parsers
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// ✅ API Routes
app.use("/api/v1", Dashboard);

// ✅ Serve static frontend files
app.use(express.static(path.join(__dirname, "Frontend", "Frontend", "dist")));

// ✅ Catch-all route for client-side routing (React/Vite)
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "Frontend", "dist", "index.html"));
});

export default app;
