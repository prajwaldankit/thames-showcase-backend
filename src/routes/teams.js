
import express from "express";
import {
	createTeam,
	getAllTeams,
} from "../controller/teams.js";

const router = express.Router();

router.post("/", createTeam);
router.get("/", getAllTeams);

export default router;
