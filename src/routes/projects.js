import { Router } from "express"

const projectRoutes = Router()

projectRoutes.get("/", (req, res) => {
	res.send("THis is a list of projects")
})

projectRoutes.post("/", (req, res) => {
	const reqData = req.body;
	res.json({
		...reqData, message: "Project has been created"
	})
})

projectRoutes.get("/:id", (req, res) => {
	res.send("THis is a project details page")
})

export default projectRoutes
