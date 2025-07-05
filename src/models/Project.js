import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	imgUrl: {
		type: String,
		required: true
	},
	team: {
		type: String,
		required: true
	}
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
