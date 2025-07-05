import DbClient from "../lib/DbClient.js";

const prisma = DbClient.getInstance().prisma;

export const createProductAttribute = async (attributeData) => {
  return prisma.productAttribute.create({ data: attributeData });
};

export const updateProductAttribute = async (productAttributeId, updateData) => {
  return prisma.productAttribute.update({
    where: { productAttributeId },
    data: updateData,
  });
};

export const deleteProductAttribute = async (productAttributeId) => {
  return prisma.productAttribute.delete({
    where: { productAttributeId },
  });
};

export const findProductAttributeById = async (productAttributeId) => {
  return prisma.productAttribute.findUnique({
    where: { productAttributeId },
  });
};

export const getAttributesByGroupId = async (attributeGroupId) => {
  return prisma.productAttribute.findMany({
    where: { attributeGroupId },
    orderBy: { displayOrder: "asc" },
  });
};

export const getAllProductAttributes = async () => {
  return prisma.productAttribute.findMany({
    include: {
      attributeGroup: true,
    },
    orderBy: {
      displayOrder: "asc",
    },
  });
};

export const getFilterableAttributes = async () => {
  return prisma.productAttribute.findMany({
    where: { isFilterable: true },
    orderBy: { displayOrder: "asc" },
  });
};
