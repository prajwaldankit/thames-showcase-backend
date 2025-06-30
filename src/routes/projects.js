import express from "express";
import {
	createProject,
	getAllProjects,
} from "../controller/projects.js";

const router = express.Router();

router.post("/", createProject);
router.get("/", getAllProjects);

export default router;
