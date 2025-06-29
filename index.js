import express from "express"
import router from "./projectRoutes.js"

const app = express()

app.use(express.json())

const PORT = 3000
app.get("/", (req, res) => {
	res.send("Hello world")
})

app.use("/projects", router)


app.listen(PORT, () => {
	console.log("OUr server has started")
})
