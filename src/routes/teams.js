
import express from "express";
import {
	createTeam,
	deleteTeam,
	getAllTeams,
	getTeamById,
	updateTeam,
} from "../controller/teams.js";

const router = express.Router();

router.post("/", createTeam);
router.get("/", getAllTeams);
router.get('/:id', getTeamById);
router.put('/:id', updateTeam);
router.delete('/:id', deleteTeam);

export default router;
