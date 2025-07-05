import express from 'express';
import dotenv from 'dotenv';
import router from './router/router.js';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler.middleware.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());
app.use(morgan('common'));
app.use(cors());
app.use(errorHandler);

// Routes
app.use('/', router);

export default app;
