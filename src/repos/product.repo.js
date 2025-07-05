import DbClient from "../lib/DbClient.js";

const prisma = DbClient.getInstance().prisma;

export const createProduct = async (productData) => {
  return prisma.product.create({ data: productData });
};

export const updateProduct = async (productId, updateData) => {
  return prisma.product.update({
    where: { productId },
    data: updateData,
  });
};

export const deleteProduct = async (productId) => {
  return prisma.product.delete({
    where: { productId },
  });
};

export const findProductById = async (productId) => {
  return prisma.product.findUnique({
    where: { productId },
  });
};

export const getAllProducts = async (filter = {}) => {
  return prisma.product.findMany({
    where: filter,
    include: {
      brand: true,
      category: true,
    },
  });
};

export const getProductWithVariants = async (productId) => {
  return prisma.product.findUnique({
    where: { productId },
    include: {
      productVariants: {
        include: {
          variantOptionSelections: {
            include: {
              optionValue: {
                include: {
                  option: true,
                },
              },
            },
          },
        },
      },
      productSpecifications: {
        include: {
          productAttribute: {
            include: {
              attributeGroup: true,
            },
          },
        },
      },
      brand: true,
      category: true,
    },
  });
};

export const getProductsByCategoryId = async (categoryId) => {
  return prisma.product.findMany({
    where: { categoryId },
    include: {
      brand: true,
      category: true,
    },
  });
};

export const getProductsByBrandId = async (brandId) => {
  return prisma.product.findMany({
    where: { brandId },
    include: {
      brand: true,
      category: true,
    },
  });
};