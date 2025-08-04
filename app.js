import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Get current __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS Setup
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

// Parse JSON and URL Encoded
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Public folder (optional)
app.use(express.static("public"));

app.use(express.static(path.join(__dirname, "Frontend", "Frontend", "dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "Frontend", "dist", "index.html"));
});

// Your Routes
import Dashboard from "./routes/internRoutes.js";
app.use("/api/v1", Dashboard);

export default app;
