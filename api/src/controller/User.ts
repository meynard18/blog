import bcrypt from 'bcrypt';
import UserModel from '../model/User/User.model.js';
import { Request, Response } from 'express';

interface AuthenticatedRequest extends Request {
   user?: string;
}

const createUser = async (req: Request, res: Response) => {
   try {
      const { email, password, confirmPassword } = req.body;

      // Validate that password and confirmPassword match
      if (password !== confirmPassword) {
         return res.status(400).send({ error: 'Passwords do not match' });
      }

      const hashedPassword = await bcrypt.hash(password, 8); // 8 is the number of salt rounds

      // Create a new user instance
      const newUser = new UserModel({
         email,
         password: hashedPassword,
         confirmPassword: hashedPassword,
      });

      // Save the user to the database
      const savedUser = await newUser.save();

      // Generate the JWT token
      const token = await savedUser.generateAuthToken();

      res.status(201).send({ user: savedUser, token });
   } catch (error) {
      res.status(500).send(error);
   }
};

const readProfile = async (req: AuthenticatedRequest, res: Response) => {
   res.send(req.user);
};

const updateUser = async (req: Request, res: Response) => {
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
      const updatedUser = await UserModel.findOneAndUpdate(
         { _id: userId },
         { password: hashedPassword },
         { new: true, runValidators: true }
      );

      // If the user is not found, return a 404 response
      if (!updatedUser) {
         return res.status(404).send({ error: 'User not found' });
      }

      res.status(200).send(updatedUser);
   } catch (error) {
      console.error(error);
      res.status(500).send(error);
   }
};

const logInUser = async (req: Request, res: Response) => {
   const { email, password } = req.body;
   try {
      // Find the user based on the provided email
      const user = await UserModel.findOne({ email });

      // If the user is not found, return an error
      if (!user) {
         return res.status(401).send('Invalid credentials');
      }

      // Compare the hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
         return res.status(401).send('Invalid credentials');
      }

      // Generate the JWT token
      const token = await user.generateAuthToken();
      // Return the token as the response
      return res.status(200).send({ user, token });
   } catch (error) {
      return res.status(500).send({ error, message: `Internal server error` });
   }
};

export default { createUser, updateUser, logInUser, readProfile };
