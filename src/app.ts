import express, { Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './module/product/product.route';
import { OrderRoutes } from './module/order/order.route';

const app = express();

// Parsers
app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);


app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to B3A2 Ecomm"
  });
});
app.use((req: Request, res: Response, next: any) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
  next()
});

export default app;
