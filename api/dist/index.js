import express from 'express';
import mongoose from 'mongoose';
import { config } from './config/config.js';
import userRoutes from './routes/users.js';
const router = express();
mongoose
    .connect(config.mongo.url)
    .then(() => console.log(`connected today! ${config.server.port}`))
    .catch((error) => console.log(error));
router.use(express.json());
router.use('/', userRoutes);
router.listen(`${config.server.port}`, () => {
    console.log('Server is up and connected ' + `${config.server.port}`);
});
//# sourceMappingURL=index.js.map