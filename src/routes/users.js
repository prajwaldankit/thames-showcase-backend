import express from "express";
import {
	createUser,
	deleteUser,
	getAllUsers,
	getUserByEmail,
	getUserById,
	updateUser,
} from "../controller/users.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.get('/:email', getUserByEmail);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
