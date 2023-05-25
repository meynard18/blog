import BlogModel from '../model/Blog.js';
import { Request, Response } from 'express';
import { Document } from 'mongoose';

interface AuthenticatedRequest extends Request {
   user?: {
      email: string;
   };
}

const createBlog = async (req: AuthenticatedRequest, res: Response) => {
   try {
      const {
         authorFirstName,
         authorLastName,
         authorEmail,
         authorPhoneNumber,
         title,
         content,
         image,
      } = req.body;

      // check if authenticated user email matches provided email
      if (req.user?.email !== authorEmail) {
         // Unauthorized access, email doesn't match
         return res
            .status(401)
            .send({ error: `Email on file doesn't match provided email ` });
      }

      // Create a new blog post
      const newBlog = new BlogModel({
         author: {
            firstName: authorFirstName,
            lastName: authorLastName,
            email: authorEmail,
            phoneNumber: authorPhoneNumber,
         },
         title,
         content,
         image,
      });

      // Save the new blog post to the database
      const savedBlog = await newBlog.save();

      res.status(201).json(savedBlog);
   } catch (error) {
      console.error(error);
      res.status(500).send(error);
   }
};

export default { createBlog };
