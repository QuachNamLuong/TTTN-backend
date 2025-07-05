import DbClient from "../lib/DbClient.js";

const prisma = DbClient.getInstance().prisma;

export const createOptionValue = async (optionValueData) => {
  return prisma.optionValue.create({ data: optionValueData });
};

export const updateOptionValue = async (optionValueId, updateData) => {
  return prisma.optionValue.update({
    where: { optionValueId },
    data: updateData,
  });
};

export const deleteOptionValue = async (optionValueId) => {
  return prisma.optionValue.delete({
    where: { optionValueId },
  });
};

export const findOptionValueById = async (optionValueId) => {
  return prisma.optionValue.findUnique({
    where: { optionValueId },
  });
};

export const getOptionValuesByOptionId = async (optionId) => {
  return prisma.optionValue.findMany({
    where: { optionId },
  });
};

export const getOptionValueWithOption = async (optionValueId) => {
  return prisma.optionValue.findUnique({
    where: { optionValueId },
    include: {
      option: true,
    },
  });
};

export const getOptionValueWithSelections = async (optionValueId) => {
  return prisma.optionValue.findUnique({
    where: { optionValueId },
    include: {
      variantOptionSelections: {
        include: {
          productVariant: true,
        },
      },
    },
  });
};