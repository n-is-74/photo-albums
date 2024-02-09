import express from 'express';
import redirectIfNotAuth from '../middlewares/redirectIfNotAuth';
import { Album } from '../../db/models';

const albumRouter = express.Router();

albumRouter.get('/', redirectIfNotAuth, async (req, res) => {
  // const users = await User.findAll();
  const album = await Album.findAll();
  res.render('AlbomPage', { album });
});

// albumRouter.get('/add', redirectIfNotAuth, async (req, res) => {
//   res.render('AddAlbumForm');
// });

export default albumRouter;
