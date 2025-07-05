import DbClient from "../lib/DbClient.js";

const prisma = DbClient.getInstance().prisma;

export const createVariantOptionSelection = async (selectionData) => {
  return prisma.variantOptionSelection.create({ data: selectionData });
};

export const deleteVariantOptionSelection = async (variantOptionSelectionId) => {
  return prisma.variantOptionSelection.delete({
    where: { variantOptionSelectionId },
  });
};

export const getVariantOptionSelectionById = async (variantOptionSelectionId) => {
  return prisma.variantOptionSelection.findUnique({
    where: { variantOptionSelectionId },
  });
};

export const getSelectionsByProductVariantId = async (productVariantId) => {
  return prisma.variantOptionSelection.findMany({
    where: { productVariantId },
    include: {
      optionValue: {
        include: {
          option: true,
        },
      },
    },
  });
};

export const getSelectionsByOptionValueId = async (optionValueId) => {
  return prisma.variantOptionSelection.findMany({
    where: { optionValueId },
    include: {
      productVariant: true,
    },
  });
};
