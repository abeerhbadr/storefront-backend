import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const verifyAuthToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.headers.authorization;
    //@ts-ignore
    const token = authorizationHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET as jwt.Secret);

    next();
  } catch (error) {
    res.status(401);
  }
};

export default verifyAuthToken;
