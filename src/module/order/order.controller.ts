import { Request, Response } from 'express';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  const orderData = req.body;
  const result = await OrderServices.createOrder(orderData);
  res.status(200).json({
    success: true,
    message: 'Order created successfully!',
    data: result,
  });
};


export const OrderControllers = {
  createOrder,
  // getAllOrders,
  // getOrderById,
  
};
