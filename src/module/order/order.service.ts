import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (payload: TOrder) => {
  const order = new Order(payload);
  await order.save();
  return order;
};

export const OrderServices = {
  createOrder,
  // getAllOrders,
  // getOrdersByEmail,
  // getOrderById,
};
