import express from "express";

import projectRoutes from "./routes/projects.js";
import teamRoutes from "./routes/teams.js";
import connectDB from "./config/db.js";
import env from "./config/env.js"

const app = express();

const PORT = env.PORT || 3000;

app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use("/projects", projectRoutes);
app.use("/teams", teamRoutes);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
