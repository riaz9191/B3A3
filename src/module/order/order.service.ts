import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (payload: TOrder) => {
  const order = new Order(payload);
  await order.save();
  return order;
};

const getAllOrders = async () => {
  const orders = await Order.find().populate('productId');
  return orders;
};
const getOrdersByEmail = async (email: string) => {
  const orders = await Order.find({ email }).populate('productId');
  return orders;
};

export const OrderServices = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
  // getOrderById,
};
