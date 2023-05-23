import express from 'express';
import UserModel from '../model/User.js'; // Import the User model we defined
import bcrypt from 'bcrypt';
import UserController from '../controller/User.js';
const router = express.Router();
router.post('/users', UserController.createUser);
router.get('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        // Find the user by ID in the database
        const user = await UserModel.findById(userId);
        // If the user is not found, return a 404 response
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.status(200).send(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal server error' });
    }
});
router.patch('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const { newPassword, confirmPassword } = req.body; // Assuming the new password and confirmation are sent in the request body
        // Find the user by ID in the database
        const user = await UserModel.findById(userId);
        // If the user is not found, return a 404 response
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        // Check if the new password and confirmation match
        if (newPassword !== confirmPassword) {
            return res.status(400).send({ error: 'Passwords do not match' });
        }
        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 8);
        // Update the user's password with the new password
        user.password = hashedPassword;
        // Save the updated user in the database
        const updatedUser = await user.save();
        res.status(200).send(updatedUser);
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
export default router;
//# sourceMappingURL=users.js.map