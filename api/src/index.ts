import express from 'express';
import mongoose from 'mongoose';
import { config } from './config/config.js';

const app = express();

mongoose
   .connect(config.mongo.url)
   .then(() => console.log(`connected today! ${config.server.port}`))
   .catch((error) => console.log(error));
// const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
   res.send('get route ,test!!!!!!!!');
});

app.listen(`${config.server.port}`, () => {
   console.log('Server is up and connected ' + `${config.server.port}`);
});
