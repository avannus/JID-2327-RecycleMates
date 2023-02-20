import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { connect } from 'mongoose';
import bp from 'body-parser';
const { urlencoded, json } = bp;
import cors from 'cors';

import './api/models/userModel.js';
import routes from './api/routes/routes.js';

// add your connection url to .env if the default fails
connect(process.env.MONGODB_CONNECTION_URL || 'mongodb://127.0.0.1:27017/RecycleMates');

// init express server
const app = express();
const port = process.env.PORT || 3000;

app.use(urlencoded({ extended: true }));
app.use(json());
routes(app);

app.use(cors({
  origin: '*',
}));
app.get('/', (req, res, next) => {
  res.json({ message: 'Welcome to the RecycleMates API' });
  next();
});

app.listen(port);

console.log(`RESTful API server started on: ${port}`);

app.use((req, res) => {
  res.status(404).send({ url: `404: ${req.method} on endpoint ${req.originalUrl} not found` });
});
