import express, { Request, Response } from 'express';
import { order, StoreOrder } from './../../models/order';
import jwt from 'jsonwebtoken';
import verifyAuthToken from '../../middlewares/tokenVerification';

const orderRouter = express.Router();

const stOrder = new StoreOrder();

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
