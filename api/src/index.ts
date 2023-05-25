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
      console.log('hello there');
      next();
   });

   router.use(express.json());
   router.use('/', userRoutes);
   router.use('/', blogRoutes);

   router.listen(`${config.server.port}`, () => {
      console.log('Server is up and connected ' + `${config.server.port}`);
   });
};
