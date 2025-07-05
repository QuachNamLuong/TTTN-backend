import DbClient from "../lib/DbClient.js";

const prisma = DbClient.getInstance().prisma;

export const createAttributeGroup = async (groupData) => {
  return prisma.attributeGroup.create({ data: groupData });
};

export const updateAttributeGroup = async (attributeGroupId, updateData) => {
  return prisma.attributeGroup.update({
    where: { attributeGroupId },
    data: updateData,
  });
};

export const deleteAttributeGroup = async (attributeGroupId) => {
  return prisma.attributeGroup.delete({
    where: { attributeGroupId },
  });
};

export const findAttributeGroupById = async (attributeGroupId) => {
  return prisma.attributeGroup.findUnique({
    where: { attributeGroupId },
  });
};

export const getAttributeGroupsByCategoryId = async (categoryId) => {
  return prisma.attributeGroup.findMany({
    where: { categoryId },
    orderBy: { displayOrder: "asc" },
    include: {
      productAttributes: true,
    },
  });
};

export const getAllAttributeGroups = async () => {
  return prisma.attributeGroup.findMany({
    orderBy: { displayOrder: "asc" },
    include: {
      category: true,
    },
  });
};