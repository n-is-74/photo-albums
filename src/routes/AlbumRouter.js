import express from 'express';
import redirectIfNotAuth from '../middlewares/redirectIfNotAuth';
import { User } from '../../db/models';

const albumRouter = express.Router();

albumRouter.get('/add', redirectIfNotAuth, async (req, res) => {
  const user = await User.findAll();
  res.render('AddAlbumForm', { user });
});

export default albumRouter;
