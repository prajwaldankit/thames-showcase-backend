import express from "express"
import projectRoutes from "./routes/projects.js"
import teamRoutes from "./routes/teams.js"

const app = express()

app.use(express.json())

const PORT = 3000
app.get("/", (req, res) => {
	res.send("Hello world123")
})

app.use("/projects", projectRoutes)
app.use("/teams", teamRoutes)

app.listen(PORT, () => {
	console.log("OUr server has started")
})
