import express from "express";
import cors from "cors";

import projectRoutes from "./routes/projects.js";
import teamRoutes from "./routes/teams.js";
import connectDB from "./config/db.js";
import env from "./config/env.js"

const app = express();
app.use(cors())

// Connect to DB
connectDB();

// Routes
app.use(express.json());

app.use("/projects", projectRoutes);
app.use("/teams", teamRoutes);

const PORT = env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
