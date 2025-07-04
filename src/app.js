import express from 'express';
import dotenv from 'dotenv';
import router from './router/router.js';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// API route goes here BEFORE error handler
app.use('/', router);

export default app;
