import express from 'express';
import UserController from '../controller/User.js';

const router = express.Router();

router.post('/users', UserController.createUser);
router.get('/users/:id', UserController.readUser);
router.patch('/users/:id', UserController.updateUser);
router.post('/userLogin', UserController.logInUser);

export default router;
