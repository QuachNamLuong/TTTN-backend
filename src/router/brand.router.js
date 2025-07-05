import express from "express";
import * as brandController from "../controllers/brand.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { brandSchema } from "../validators/brand.validator.js";

const brandRouter = express.Router();

brandRouter.post(
  "/brands",
  validate(brandSchema),
  brandController.createBrandHandler
);

/**
 * @swagger
 * /api/brands:
 *   get:
 *     summary: Get all brands
 *     tags: [Brand]
 *     responses:
 *       200:
 *         description: A list of brands
 */
brandRouter.get("/brands", brandController.getAllBrandHandler);

export default brandRouter;
