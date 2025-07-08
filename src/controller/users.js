import User from "../models/User.js";

export const createUser = async (req, res) => {
	try {
		const userData = req.body;
		const user = new User(userData);
		await user.save();
		res.status(201).json(user);
	} catch (err) {
		console.log(err)
		res.status(500).json({ error: err.message });
	}
};

export const getAllUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const getUserById = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findById(id);
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		res.json(user);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const getUserByEmail = async (req, res) => {
	try {
		const { email } = req.params;
		const user = await User.findOne({
			email: email
		});
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		res.json(user);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const updateUser = async (req, res) => {
	try {
		const { id } = req.params;

		const user = await User.findById(id);
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		Object.assign(user, req.body);

		const updatedUser = await user.save();

		res.json(updatedUser);

	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const deleteUser = async (req, res) => {
	try {
		const { id } = req.params;

		const deletedUser = await User.findByIdAndDelete(id);
		if (!deletedUser) {
			return res.status(404).json({ message: 'User not found' });
		}

		res.json({ message: 'User deleted successfully' });

	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
