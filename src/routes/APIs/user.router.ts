import express, { Request, Response } from 'express';
import { person, StoreUser } from './../../models/user';
import jwt from 'jsonwebtoken';
import verifyAuthToken from '../../middlewares/tokenVerification';

const userRouter = express.Router();

const stUser = new StoreUser();

userRouter.get(
  '/users',
  verifyAuthToken,
  async (req: Request, res: Response) => {
    try {
      //res.send('this is the INDEX route')
      const users = await stUser.index();
      res.status(200).json(users);
    } catch (err) {
      res.status(400);
      res.json(err);
    }
  }
);

userRouter.get('/users/:id', verifyAuthToken, async (req: Request, res: Response) => {
  try {
    //res.send('this is the SHOW route');
    const user = await stUser.show(parseInt(req.params.id));
    res.status(200).json(user);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});

userRouter.post('/users', verifyAuthToken, async (req: Request, res: Response) => {
  const u: person = {
    id: 1,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password_: req.body.password_,
  };

  const newUser = await stUser.create(u);
  var token = jwt.sign(
    { user: newUser },
    process.env.Token_SECRET as jwt.Secret
  );
  res.status(200).json(token);
  try {
    res.send('this is the CREATE route');
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});

export default userRouter;
