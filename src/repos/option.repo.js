import DbClient from "../lib/DbClient.js";

const prisma = DbClient.getInstance().prisma;

export const createOption = async (optionData) => {
  return prisma.option.create({ data: optionData });
};

export const updateOption = async (optionId, updateData) => {
  return prisma.option.update({
    where: { optionId },
    data: updateData,
  });
};

export const deleteOption = async (optionId) => {
  return prisma.option.delete({
    where: { optionId },
  });
};

export const findOptionById = async (optionId) => {
  return prisma.option.findUnique({
    where: { optionId },
  });
};

export const findOptionByName = async (optionName) => {
  return prisma.option.findFirst({
    where: { optionName },
  });
};

export const getAllOptions = async () => {
  return prisma.option.findMany();
};

export const getOptionWithValues = async (optionId) => {
  return prisma.option.findUnique({
    where: { optionId },
    include: {
      optionValues: true,
    },
  });
};