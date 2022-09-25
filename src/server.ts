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

app.use('/store', userRouter);  //RESTful api?
app.use('/store', productRouter); //RESTful api?
app.use('/store', orderRouter); //RESTful api, are each one a restful api or the store is the only restful api?

app.listen(3000, () => {
  console.log(`starting app on: ${address}`);
});
