import DbClient from "../lib/DbClient.js";

const prisma = DbClient.getInstance().prisma;

export const createProductSpecification = async (specData) => {
  return prisma.productSpecification.create({ data: specData });
};

export const updateProductSpecification = async (productSpecificationId, updateData) => {
  return prisma.productSpecification.update({
    where: { productSpecificationId },
    data: updateData,
  });
};

export const deleteProductSpecification = async (productSpecificationId) => {
  return prisma.productSpecification.delete({
    where: { productSpecificationId },
  });
};

export const findProductSpecificationById = async (productSpecificationId) => {
  return prisma.productSpecification.findUnique({
    where: { productSpecificationId },
  });
};

export const getSpecificationsByProductId = async (productId) => {
  return prisma.productSpecification.findMany({
    where: { productId },
    include: {
      productAttribute: {
        include: {
          attributeGroup: true,
        },
      },
    },
    orderBy: {
      productAttribute: {
        displayOrder: 'asc',
      },
    },
  });
};

export const getSpecificationsByAttributeId = async (productAttributeId) => {
  return prisma.productSpecification.findMany({
    where: { productAttributeId },
    include: {
      product: true,
    },
  });
};
