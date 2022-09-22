import express from 'express';

const userRouter = express.Router();

const create = async () => {};

const show = async () => {};

const index = async () => {};

//is it okay to have same route with different requests?
userRouter.post('/create_user');

userRouter.get('/:userId/show_user');

userRouter.get('/users_index');

export default userRouter;
