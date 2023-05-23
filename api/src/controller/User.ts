import bcrypt from 'bcrypt';
import UserModel from '../model/User.js';
import { Request, Response } from 'express';

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

      res.status(201).send(savedUser);
   } catch (error) {
      res.status(500).send(error);
   }
};

export default { createUser };
