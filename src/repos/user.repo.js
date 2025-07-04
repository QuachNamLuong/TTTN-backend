import DBClient from "../lib/DBClient.js";

const dbClient = DBClient.getInstance().prisma;

const getAllUsers = async () => {
  return dbClient.user.findMany();
};

const getUserById = async (userId) => {
  return dbClient.user.findUnique({ where: { userId } });
};

const createUser = async (userData) => {
  return dbClient.user.create({ data: userData });
};

const updateUser = async (userId, userData) => {
  return dbClient.user.update({
    where: { userId },
    data: userData,
  });
};

const deleteUser = async (userId) => {
  return dbClient.user.delete({ where: { userId } });
};

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};