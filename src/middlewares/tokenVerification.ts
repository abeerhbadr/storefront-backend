import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const verifyAuthToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.headers.authorization;
    //@ts-ignore
    const token = authorizationHeader.split(' ')[1];
    console.log('token in mid:', token)
    console.log(process.env.TOKEN_SECRET as jwt.Secret)
    jwt.verify(token as string, process.env.TOKEN_SECRET as string);
    console.log('Valid token')
    next();
  } catch (error) {
    res.status(401)
    res.json('Access denied, invalid token')
    console.log('Access denied, invalid token')
    return
  }
};

export default verifyAuthToken;
