import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";

import contactRoutes from "./routes/contactRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Portfolio Backend Running");
// });

app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/resume", resumeRoutes);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});