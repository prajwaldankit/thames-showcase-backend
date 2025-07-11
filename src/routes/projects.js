import express from "express";
import {
	createProject,
	deleteProject,
	getAllProjects,
	getProjectById,
	updateProject,
} from "../controller/projects.js";
import { validateLogin } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", createProject);
router.get("/", validateLogin, getAllProjects);
router.get('/:id', getProjectById);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);


export default router; 
