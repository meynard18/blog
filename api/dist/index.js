import express from 'express';
import mongoose from 'mongoose';
import { config } from './config/config.js';
import userRoutes from './routes/users.js';
import blogRoutes from './routes/blogs.js';
const router = express();
mongoose
    .connect(config.mongo.url)
    .then(() => startServer())
    .catch((error) => console.log(error));
const startServer = () => {
    router.use((req, res, next) => {
        next();
    });
    router.use(express.json());
    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    });
    router.use('/', userRoutes);
    router.use('/', blogRoutes);
    router.listen(`${config.server.port}`, () => {
        console.log('Server is up and connected ' + `${config.server.port}`);
    });
};
//# sourceMappingURL=index.js.map