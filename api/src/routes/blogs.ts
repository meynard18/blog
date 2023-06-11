import express from 'express';
import BlogController from '../controller/Blog.js';
import authenticate from '../middleware/auth.js';

const router = express.Router();

router.post('/blog/create', authenticate, BlogController.createBlog);
router.patch('/blog/update-blog/:id', authenticate, BlogController.updateBlog);
// router.get('/blogs/:email', BlogController.readBlogs);

export default router;
