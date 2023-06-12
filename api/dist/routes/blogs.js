import express from 'express';
import BlogController from '../controller/Blog.js';
import authenticate from '../middleware/auth.js';
const router = express.Router();
router.post('/blog/create', authenticate, BlogController.createBlog);
router.get('/blog/read-blogs', authenticate, BlogController.readBlogs);
router.patch('/blog/update-blog/:id', authenticate, BlogController.updateBlog);
router.delete('/blog/delete-blog/:id', authenticate, BlogController.deleteBlog);
export default router;
//# sourceMappingURL=blogs.js.map