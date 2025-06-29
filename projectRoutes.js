
import { Router } from "express"

const router = Router()


router.get("/", (req, res) => {
	res.send("THis is a list of projects")
})


router.post("/", (req, res) => {
	const reqData = req.body;
	res.json(reqData)
})

router.get("/:id", (req, res) => {
	res.send("THis is a project details page")
})

export default router
