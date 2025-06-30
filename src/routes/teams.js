
import { Router } from "express"

const teamRoutes = Router()

teamRoutes.get("/", (req, res) => {
	res.send("THis is a list of teams")
})

teamRoutes.post("/", (req, res) => {
	const reqData = req.body;
	res.json({
		...reqData, message: "Team has been created"
	})
})

teamRoutes.get("/:id", (req, res) => {
	res.send("THis is a team details page")
})

export default teamRoutes
