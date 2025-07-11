import jwt from "jsonwebtoken";
import env from "../config/env.js";
const JWT_SECRET = env.JWT_SECRET || "your_super_secret_key";

export const validateLogin = (req, res, next) => {
	const authHeader = req.headers.authorization;
	console.log(authHeader)
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return res.status(401).json({ error: "No token provided" });
	}

	const token = authHeader.split(" ")[1];

	try {
		const decoded = jwt.verify(token, JWT_SECRET);
		req.user = decoded;
		next();
	} catch (err) {
		return res.status(401).json({ error: "Invalid token" });
	}
};
