import express from 'express';
import redirectIfNotAuth from '../../middlewares/redirectIfNotAuth';
import { Album, Access } from '../../../db/models';

const albumRouter = express.Router();

albumRouter.get('/', redirectIfNotAuth, async (req, res) => {
  const { user } = res.locals;
  const userId = user.id;

  try {
    // Получение ID альбомов, к которым у пользователя есть доступ
    const accessEntries = await Access.findAll({
      where: { user_id: userId },
      attributes: ['album_id'], // Получаем только ID альбомов
    });

    console.log('1------>', accessEntries);

    // Извлекаем ID альбомов
    const albumIds = accessEntries.map((access) => access.album_id);

    console.log('2------>', albumIds);

    // Получаем альбомы по этим ID
    const accessibleAlbums = await Album.findAll({
      where: { id: albumIds },
    });

    console.log('3------>', accessibleAlbums);

    res.render('AlbumPage', { accessibleAlbums });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// albumRouter.get('/add', redirectIfNotAuth, async (req, res) => {
//   res.render('AddAlbumForm');
// });

export default albumRouter;
