import express from 'express';
import UserController from '../controller/User.js';
import authenticate from '../middleware/auth.js';

const router = express.Router();

router.post('/user/create', UserController.createUser);
router.get('/user/me', authenticate, UserController.readProfile);
router.patch('/user/update/:id', UserController.updateUser);
router.post('/user/login', authenticate, UserController.logInUser);

export default router;
