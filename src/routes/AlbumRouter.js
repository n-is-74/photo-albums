import express from 'express';
import redirectIfNotAuth from '../middlewares/redirectIfNotAuth';
import { User } from '../../db/models';

const albumRouter = express.Router();

albumRouter.get('/', redirectIfNotAuth, async (req, res) => {
  const users = await User.findAll();
  res.render('AlbomPage', { users });
});

// albumRouter.get('/add', redirectIfNotAuth, async (req, res) => {
//   res.render('AddAlbumForm');
// });

export default albumRouter;
