import * as brandRepo from "../repos/brand.repo.js";

export const createNewBrand = async (data) => {
  const existing = await brandRepo.findBrandByName(data.brandName);
  if (existing) {
    const error = new Error("Brand name already exists");
    error.status = 409;
    throw error;
  }
  return brandRepo.createNewBrand(data);
};

export const getAllBrand = async () => {
  return brandRepo.getAllBrand();
};
