import DbClient from "../lib/DbClient.js";

const prisma = DbClient.getInstance().prisma;

export const createOrderItem = async (orderItemData) => {
  return prisma.orderItem.create({ data: orderItemData });
};

export const updateOrderItem = async (orderItemId, updateData) => {
  return prisma.orderItem.update({
    where: { orderItemId },
    data: updateData,
  });
};

export const deleteOrderItem = async (orderItemId) => {
  return prisma.orderItem.delete({
    where: { orderItemId },
  });
};

export const getOrderItemById = async (orderItemId) => {
  return prisma.orderItem.findUnique({
    where: { orderItemId },
  });
};

export const getOrderItemsByOrderId = async (orderId) => {
  return prisma.orderItem.findMany({
    where: { orderId },
    include: {
      productVariant: {
        include: {
          product: true,
        },
      },
    },
  });
};

export const updateItemStatus = async (orderItemId, itemStatus) => {
  return prisma.orderItem.update({
    where: { orderItemId },
    data: { itemStatus },
  });
};