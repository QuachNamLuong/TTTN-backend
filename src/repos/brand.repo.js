import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

const createNewBrand = async (brandData) => {
    return prisma.brand.create({ data: brandData });
};

const updateBrand = async (brandId, brandData) => {
    return prisma.brand.update({
            where: { brandId },
            data: brandData
    });
};

const deleteBrand = async (brandId) => {
    return prisma.brand.delete({ where: { brandId } });
};

const getAllBrand = async () => {
    return prisma.brand.findMany();
};

const findBrandByName = async (brandName) => {
    return prisma.brand.findUnique({ where: { brandName } });
};

const findBrandById = async (brandId) => {
    return prisma.brand.findUnique({ where: { brandId } });
};

export default {
    createNewBrand,
    updateBrand,
    deleteBrand,
    getAllBrand,
    findBrandByName,
    findBrandById
};