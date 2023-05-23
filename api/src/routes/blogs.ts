import express, { Request, Response } from 'express';
import BlogModel from '../model/Blog.js'; // Import the Blog model we defined

const router = express.Router();

router.post('/blog', async (req: Request, res: Response) => {
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
});

export default router;
