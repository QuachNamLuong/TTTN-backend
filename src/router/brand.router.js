import express from 'express';
import { createBrandHandler } from '../controllers/brand.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { brandSchema } from '../validators/brand.validator.js';

const brandRouter = express.Router();

brandRouter.post('/brands', validate(brandSchema), createBrandHandler);

export default brandRouter;