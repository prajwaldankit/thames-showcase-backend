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

export const getProjectById = async (req, res) => {
	try {
		const { id } = req.params; // 👈 get ID from route params
		const project = await Project.findById(id);
		if (!project) {
			return res.status(404).json({ message: 'Project not found' });
		}
		res.json(project);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const updateProject = async (req, res) => {
	try {
		const { id } = req.params;

		const project = await Project.findById(id);
		if (!project) {
			return res.status(404).json({ message: 'Project not found' });
		}

		Object.assign(project, req.body);

		const updatedProject = await project.save();

		res.json(updatedProject);

	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const deleteProject = async (req, res) => {
	try {
		const { id } = req.params;
		const deletedProject = await Project.findByIdAndDelete(id);
		if (!deletedProject) {
			return res.status(404).json({ message: 'Project not found' });
		}
		res.json({ message: 'Project deleted successfully' });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
