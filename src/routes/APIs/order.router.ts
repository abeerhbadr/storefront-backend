import express, { Request, Response } from 'express';
import { order, product, StoreOrder } from './../../models/order';
import verifyAuthToken from '../../middlewares/tokenVerification';

const orderRouter = express.Router();

const stOrder = new StoreOrder();

orderRouter.post(
  '/orders',
  verifyAuthToken,
  async (req: Request, res: Response) => {
    try {
      const o: order = {
        id: 1,
        userid: 1,
        ostatus: 'active',
      };
      const op1: product = {
        productid: 1,
        productqty: 3,
      };
      const op2: product = {
        productid: 2,
        productqty: 1,
      };

      const order = await stOrder.create(o, [op1, op2]);
      res.status(200).json(order);
    } catch (error) {
      res.status(400);
      res.json(error);
    }
  }
);

orderRouter.get(
  '/orders/active/:userId',
  verifyAuthToken,
  async (req: Request, res: Response) => {
    try {
      const order = await stOrder.showCurrentOrder(parseInt(req.params.userId));
      res.status(200).json(order);
    } catch (err) {
      res.status(400);
      res.json(err);
    }
  }
);

export default orderRouter;
