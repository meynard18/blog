import express from 'express';
import UserModel from '../model/User.js'; // Import the User model we defined
const router = express.Router();
router.post('/users', async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body;
        // Validate that password and confirmPassword match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }
        // Create a new user instance
        const newUser = new UserModel({ email, password, confirmPassword });
        // Save the user to the database
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
router.get('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        // Find the user by ID in the database
        const user = await UserModel.findById(userId);
        // If the user is not found, return a 404 response
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
export default router;
//# sourceMappingURL=users.js.map