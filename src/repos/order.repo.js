import DbClient from "../lib/DbClient.js";

const prisma = DbClient.getInstance().prisma;

export const createOrder = async (orderData) => {
  return prisma.order.create({ data: orderData });
};

export const updateOrder = async (orderId, orderData) => {
  return prisma.order.update({
    where: { orderId },
    data: orderData,
  });
};

export const deleteOrder = async (orderId) => {
  return prisma.order.delete({
    where: { orderId },
  });
};

export const getAllOrders = async (filter = {}) => {
  return prisma.order.findMany({
    where: filter,
    orderBy: { orderedAt: "desc" },
  });
};

export const findOrderById = async (orderId) => {
  return prisma.order.findUnique({
    where: { orderId },
  });
};

export const getOrderWithItems = async (orderId) => {
  return prisma.order.findUnique({
    where: { orderId },
    include: {
      orderItems: {
        include: {
          productVariant: {
            include: {
              product: true,
            },
          },
        },
      },
      user: true,
    },
  });
};

export const getOrdersByUserId = async (userId) => {
  return prisma.order.findMany({
    where: { userId },
    orderBy: { orderedAt: "desc" },
  });
};

export const updateOrderStatus = async (orderId, orderStatus) => {
  return prisma.order.update({
    where: { orderId },
    data: { orderStatus },
  });
};

export const updatePaymentStatus = async (orderId, paymentStatus) => {
  return prisma.order.update({
    where: { orderId },
    data: { paymentStatus },
  });
};