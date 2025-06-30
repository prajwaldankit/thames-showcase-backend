import Project from "../models/Project.js";

export const createProject = async (req, res) => {
	try {
		const projectData = req.body;
		const project = new Project(projectData);
		await project.save();
		res.status(201).json(project);
	} catch (err) {
		console.log(err)
		res.status(500).json({ error: err.message });
	}
};

export const getAllProjects = async (req, res) => {
	try {
		const projects = await Project.find();
		res.json(projects);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
