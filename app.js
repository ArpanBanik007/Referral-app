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

// Routes before wildcard
import Dashboard from "./routes/internRoutes.js";
app.use("/api/v1", Dashboard);

// Serve static files
app.use(express.static(path.join(__dirname, "Frontend", "Frontend", "dist")));

// Wildcard route
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "Frontend", "dist", "index.html"));
});


export default app;
