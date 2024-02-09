import express from 'express';
import { User } from '../../../db/models';

const mainRouter = express.Router();

mainRouter.get('/', async (req, res) => {
  const users = await User.findAll();
  res.render('MainPage', { users });
});

export default mainRouter;
