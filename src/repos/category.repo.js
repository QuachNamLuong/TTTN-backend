import DbClient from "../lib/DbClient.js";

const prisma = DbClient.getInstance().prisma;

export const createCategory = async (categoryData) => {
  return prisma.category.create({ data: categoryData });
};

export const updateCategory = async (categoryId, updateData) => {
  return prisma.category.update({
    where: { categoryId },
    data: updateData,
  });
};

export const deleteCategory = async (categoryId) => {
  return prisma.category.delete({
    where: { categoryId },
  });
};

export const findCategoryById = async (categoryId) => {
  return prisma.category.findUnique({
    where: { categoryId },
  });
};

export const findCategoryByName = async (categoryName) => {
  return prisma.category.findFirst({
    where: { categoryName },
  });
};

export const getAllCategories = async () => {
  return prisma.category.findMany();
};

export const getCategoryWithProducts = async (categoryId) => {
  return prisma.category.findUnique({
    where: { categoryId },
    include: {
      products: true,
    },
  });
};

export const getCategoryWithAttributes = async (categoryId) => {
  return prisma.category.findUnique({
    where: { categoryId },
    include: {
      attributeGroups: {
        include: {
          productAttributes: true,
        },
      },
    },
  });
};