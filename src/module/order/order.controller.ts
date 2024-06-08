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

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    if (email) {
      const result = await OrderServices.getOrdersByEmail(email as string);
      if (!result || result.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'Orders not found for the provided email',
        });
      }
      return res.status(200).json({
        success: true,
        message: `Orders fetched successfully for user email ${email}!`,
        data: result,
      });
    } else {
      const result = await OrderServices.getAllOrders();
      return res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Could not fetch orders!',
      error: err.message,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
  // getOrderById,
  
};
