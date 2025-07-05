import * as brandService from '../services/brand.service.js';

export const createBrandHandler = async (req, res, next) => {
  try {
    const brand = await brandService.createNewBrand(req.body);
    res.status(201).json(brand);
  } catch (err) {
    next(err);
  }
};