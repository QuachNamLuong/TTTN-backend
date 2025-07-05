import express from "express";
import * as brandController from "../controllers/brand.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { brandSchema } from "../validators/brand.validator.js";

const brandRouter = express.Router();

/**
 * @swagger
 * /api/brands:
 *   post:
 *     summary: Create a new brand
 *     tags: [Brand]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Brand'
 *     responses:
 *       201:
 *         description: Brand created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brand'
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 */
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
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Brand'
 */
brandRouter.get("/brands", brandController.getAllBrandHandler);

export default brandRouter;
