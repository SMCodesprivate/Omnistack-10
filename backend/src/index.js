import express from 'express';
import mongoose from 'mongoose';

import bd from '../private/bd.js';
import routes from './routes.js';

const app = express();

mongoose.connect(bd.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

app.use(routes);

app.listen(3333);