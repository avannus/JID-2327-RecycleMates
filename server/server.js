import express from 'express';
import { connect } from 'mongoose';
import bp from 'body-parser';
const { urlencoded, json } = bp;

import './api/models/userModel.js';
import routes from './api/routes/routes.js';

connect('mongodb://127.0.0.1:27017/RecycleMates');

// init express server
const app = express();
const port = process.env.PORT || 3000;

app.use(urlencoded({ extended: true }));
app.use(json());
routes(app); // register the route

app.listen(port);

console.log(`RESTful API server started on: ${port}`);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});
