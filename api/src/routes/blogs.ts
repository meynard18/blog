import express, { Request, Response } from 'express';
import BlogModel from '../model/Blog.js'; // Import the Blog model we defined
import BlogController from '../controller/Blog.js';
import authenticate from '../middleware/auth.js';

const router = express.Router();

router.post('/blog', authenticate, BlogController.createBlog);

export default router;
