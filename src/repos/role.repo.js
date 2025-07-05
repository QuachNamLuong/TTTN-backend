import DbClient from "../lib/DbClient.js";

const prisma = DbClient.getInstance().prisma;

export const createRole = async (roleData) => {
  return prisma.role.create({ data: roleData });
};

export const updateRole = async (roleId, roleData) => {
  return prisma.role.update({
    where: { roleId },
    data: roleData,
  });
};

export const deleteRole = async (roleId) => {
  return prisma.role.delete({
    where: { roleId },
  });
};

export const getAllRoles = async () => {
  return prisma.role.findMany();
};

export const findRoleById = async (roleId) => {
  return prisma.role.findUnique({
    where: { roleId },
  });
};

export const findRoleByName = async (roleName) => {
  return prisma.role.findUnique({
    where: { roleName },
  });
};

export const getRoleWithUsers = async (roleId) => {
  return prisma.role.findUnique({
    where: { roleId },
    include: {
      users: true,
    },
  });
};