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

export const getTeamById = async (req, res) => {
	try {
		const { id } = req.params;
		const team = await Team.findById(id);
		if (!team) {
			return res.status(404).json({ message: 'Team not found' });
		}
		res.json(team);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const updateTeam = async (req, res) => {
	try {
		const { id } = req.params;

		const team = await Team.findById(id);
		if (!team) {
			return res.status(404).json({ message: 'Team not found' });
		}

		Object.assign(team, req.body);

		const updatedTeam = await team.save();

		res.json(updatedTeam);

	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const deleteTeam = async (req, res) => {
	try {
		const { id } = req.params;

		const deletedTeam = await Team.findByIdAndDelete(id);
		if (!deletedTeam) {
			return res.status(404).json({ message: 'Team not found' });
		}

		res.json({ message: 'Team deleted successfully' });

	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
