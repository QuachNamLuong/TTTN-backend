import DBClient from "../lib/DBClient.js";

const dbClient = DBClient.getInstance().prisma;

const createNewBrand = async (brandData) => {
    return dbClient.brand.create({ data: brandData });
};

const updateBrand = async (brandId, brandData) => {
    return dbClient.brand.update({
            where: { brandId },
            data: brandData
    });
};

const deleteBrand = async (brandId) => {
    return dbClient.brand.delete({ where: { brandId } });
};

const getAllBrand = async () => {
    return dbClient.brand.findMany();
};

const findBrandByName = async (brandName) => {
    return dbClient.brand.findUnique({ where: { brandName } });
};

const findBrandById = async (brandId) => {
    return dbClient.brand.findUnique({ where: { brandId } });
};

export default {
    createNewBrand,
    updateBrand,
    deleteBrand,
    getAllBrand,
    findBrandByName,
    findBrandById
};