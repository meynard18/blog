import express from 'express';
import BlogController from '../controller/Blog.js';
import authenticate from '../middleware/auth.js';
const router = express.Router();
router.post('/blog', authenticate, BlogController.createBlog);
export default router;
//# sourceMappingURL=blogs.js.map