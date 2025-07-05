import DbClient from "../lib/DbClient.js";

const prisma = DbClient.getInstance().prisma;

export const createCartItem = async (cartItemData) => {
  return prisma.cartItem.create({ data: cartItemData });
};

export const updateCartItem = async (cartItemId, updateData) => {
  return prisma.cartItem.update({
    where: { cartItemId },
    data: updateData,
  });
};

export const deleteCartItem = async (cartItemId) => {
  return prisma.cartItem.delete({
    where: { cartItemId },
  });
};

export const findCartItemById = async (cartItemId) => {
  return prisma.cartItem.findUnique({
    where: { cartItemId },
  });
};

export const getCartItemsByUserId = async (userId) => {
  return prisma.cartItem.findMany({
    where: { userId },
    include: {
      productVariant: {
        include: {
          product: true,
        },
      },
    },
  });
};

export const getCartItemsBySessionId = async (sessionId) => {
  return prisma.cartItem.findMany({
    where: { sessionId },
    include: {
      productVariant: {
        include: {
          product: true,
        },
      },
    },
  });
};

export const deleteCartItemsByUserId = async (userId) => {
  return prisma.cartItem.deleteMany({
    where: { userId },
  });
};

export const deleteCartItemsBySessionId = async (sessionId) => {
  return prisma.cartItem.deleteMany({
    where: { sessionId },
  });
};