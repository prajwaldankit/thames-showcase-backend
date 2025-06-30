import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
	name: String,
	genre: String,
	imgUrl: String,
	team: String
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
