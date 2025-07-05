import * as brandService from '../services/brand.service.js';

export const createBrandHandler = async (req, res, next) => {
  try {
    const brand = await brandService.createNewBrand(req.body);
    res.status(201).json(brand);
  } catch (err) {
    next(err);
  }
};

export const getAllBrandHandler = async (req, res, next) => {
  try {
    const brands = await brandService.getAllBrand(req.body);
    res.status(201).json(brands);
  } catch (err) {
    next(err);
  }
};