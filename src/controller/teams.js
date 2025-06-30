import Team from "../models/Team.js";

export const createTeam = async (req, res) => {
	try {
		const teamData = req.body;
		const team = new Team(teamData);
		await team.save();
		res.status(201).json(team);
	} catch (err) {
		console.log(err)
		res.status(500).json({ error: err.message });
	}
};

export const getAllTeams = async (req, res) => {
	try {
		const teams = await Team.find();
		res.json(teams);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
