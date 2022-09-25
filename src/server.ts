import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/APIs/user.router';
import productRouter from './routes/APIs/product.router';
import orderRouter from './routes/APIs/order.router';

const app: express.Application = express();
const address: string = '0.0.0.0:3000';

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/', userRouter);
app.use('/', productRouter);
app.use('/', orderRouter);

app.listen(3000, () => {
  console.log(`starting app on: ${address}`);
});
