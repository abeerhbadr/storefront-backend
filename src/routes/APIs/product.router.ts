import express, { Request, Response } from 'express';
import { product, StoreProduct } from './../../models/product';
import jwt, { verify } from 'jsonwebtoken';
import verifyAuthToken from '../../middlewares/tokenVerification';

const productRouter = express.Router();

const stProduct = new StoreProduct();

productRouter.get('/products', async (req: Request, res: Response) => {
  try {
    //res.send('this is the INDEX route')
    const products = await stProduct.index();
    res.status(200).json(products);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});

productRouter.get('/products/:id', async (req: Request, res: Response) => {
  try {
    //res.send('this is the SHOW route');
    const product = await stProduct.show(parseInt(req.params.id));
    res.status(200).json(product);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});

productRouter.post(
  '/products',
  verifyAuthToken,
  async (req: Request, res: Response) => {
    const p: product = {
      id: 1,
      pname: req.body.pname,
      price: req.body.price,
      category: req.body.category,
    };

    const newProduct = await stProduct.create(p);
    res.status(200).json(newProduct);
    try {
      res.send('this is the CREATE route');
    } catch (err) {
      res.status(400);
      res.json(err);
    }
  }
);

export default productRouter;
