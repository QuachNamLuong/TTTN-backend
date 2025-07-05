import DbClient from "../lib/DbClient.js";

const prisma = DbClient.getInstance().prisma;

export const createProductVariant = async (variantData) => {
  return prisma.productVariant.create({ data: variantData });
};

export const updateProductVariant = async (productVariantId, updateData) => {
  return prisma.productVariant.update({
    where: { productVariantId },
    data: updateData,
  });
};

export const deleteProductVariant = async (productVariantId) => {
  return prisma.productVariant.delete({
    where: { productVariantId },
  });
};

export const findProductVariantById = async (productVariantId) => {
  return prisma.productVariant.findUnique({
    where: { productVariantId },
  });
};

export const findProductVariantBySKU = async (productVariantSKU) => {
  return prisma.productVariant.findUnique({
    where: { productVariantSKU },
  });
};

export const getAllProductVariants = async (filter = {}) => {
  return prisma.productVariant.findMany({
    where: filter,
    include: {
      product: true,
    },
  });
};

export const getProductVariantsByProductId = async (productId) => {
  return prisma.productVariant.findMany({
    where: { productId },
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
  });
};

export const updateStockQuantity = async (productVariantId, stockQuantity) => {
  return prisma.productVariant.update({
    where: { productVariantId },
    data: { stockQuantity },
  });
};
