import DbClient from "../lib/DbClient.js";

const prisma = DbClient.getInstance().prisma;

export const createNewBrand = async (brandData) => {
    return prisma.brand.create({ data: brandData });
};

export const updateBrand = async (brandId, brandData) => {
    return prisma.brand.update({
            where: { brandId },
            data: brandData
    });
};

export const deleteBrand = async (brandId) => {
    return prisma.brand.delete({ where: { brandId } });
};

export const getAllBrand = async () => {
    return prisma.brand.findMany();
};

export const findBrandByName = async (brandName) => {
    return prisma.brand.findUnique({ where: { brandName } });
};

export const findBrandById = async (brandId) => {
    return prisma.brand.findUnique({ where: { brandId } });
};