import DbClient from "../lib/DbClient.js";

const prisma = DbClient.getInstance().prisma;

export const createUser = async (data) => {
  return prisma.user.create({ data });
};

export const getUserById = async (userId) => {
  return prisma.user.findUnique({
    where: { userId },
  });
};

export const getUserByUsername = async (username) => {
  return prisma.user.findUnique({
    where: { username },
  });
};

export const getUserByEmail = async (email) => {
  return prisma.user.findUnique({
    where: { email },
  });
};

export const updateUser = async (userId, data) => {
  return prisma.user.update({
    where: { userId },
    data,
  });
};

export const deleteUser = async (userId) => {
  return prisma.user.delete({
    where: { userId },
  });
};

export const listUsers = async (filter = {}) => {
  return prisma.user.findMany({
    where: filter,
  });
};
