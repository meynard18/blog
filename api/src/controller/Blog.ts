import BlogModel from '../model/Blog/Blog.model.js';
import { Request, Response } from 'express';

interface AuthenticatedRequest extends Request {
   user?: {
      email: string;
      id: string;
   };
}

const createBlog = async (req: AuthenticatedRequest, res: Response) => {
   try {
      const {
         authorId = req.user?.id,
         authorFirstName,
         authorLastName,
         authorEmail,
         authorPhoneNumber,
         title,
         content,
         image,
      } = req.body;

      // check if authenticated user email matches provided email
      if (req.user?.id !== authorId) {
         // Unauthorized access, email doesn't match
         return res.status(401).send({
            error: `Email on file doesn't match provided email`,
         });
      }

      // Create a new blog post
      const newBlog = new BlogModel({
         author: {
            authorId,
            firstName: authorFirstName,
            lastName: authorLastName,
            email: authorEmail,
            phoneNumber: authorPhoneNumber,
         },
         title,
         content,
         image,
      });
      console.log(authorEmail, authorId);
      // Save the new blog post to the database
      const savedBlog = await newBlog.save();

      res.status(201).send(savedBlog);
   } catch (error) {
      console.error(error);
      res.status(500).send(error);
   }
};

const updateBlog = async (req: AuthenticatedRequest, res: Response) => {
   try {
      const blogId = req.params.id;
      const { title, content, image, authorId = req.user?.id } = req.body;

      const blog = await BlogModel.findById(blogId);

      if (!blog) {
         return res.status(404).send({ error: 'Blog not found' });
      }
      console.log(blog?.author.authorId);
      console.log(authorId);

      if (blog?.author.authorId !== authorId) {
         throw new Error();
      }

      const updatedBlogPost = await BlogModel.findByIdAndUpdate(
         blogId,
         {
            title: title,
            content: content,
            image: image,
         },
         { new: true }
      );
      console.log(updatedBlogPost);
      res.status(200).send(updatedBlogPost);
   } catch (error) {
      res.send({ error: 'Unauthorized' });
   }
};

export default { createBlog, updateBlog };
