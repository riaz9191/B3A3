import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();

// Parsers
app.use(express.json());
app.use(cors());

app.use((req: Request, res: Response, next: any) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
