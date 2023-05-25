import express from 'express';
import UserController from '../controller/User.js';
import authenticate from '../middleware/auth.js';
const router = express.Router();
router.post('/users', UserController.createUser);
router.get('/users/me', authenticate, UserController.readProfile);
router.get('/users/:id', UserController.readUser);
router.patch('/users/:id', UserController.updateUser);
router.post('/userLogin', UserController.logInUser);
export default router;
//# sourceMappingURL=users.js.map