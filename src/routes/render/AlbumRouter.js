import express from 'express';
import redirectIfNotAuth from '../../middlewares/redirectIfNotAuth';
import { Album, Access } from '../../../db/models';

const albumRouter = express.Router();

albumRouter.get('/', redirectIfNotAuth, async (req, res) => {
  // const users = await User.findAll();
  // const album = await Album.findAll();
  const { user } = res.locals;
  const userId = user.id;

  try {
    // Получение всех альбомов, к которым у пользователя есть доступ
    const accesses = await Access.findAll({
      where: { user_id: userId },
      include: [{ model: Album }],
    });

    // Используем деструктуризацию для извлечения альбомов
    const accessibleAlbums = accesses.map(({ Albums }) => Albums);
    res.render('AlbumPage', { accessibleAlbums });

    // res.json({ accessibleAlbums });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// albumRouter.get('/add', redirectIfNotAuth, async (req, res) => {
//   res.render('AddAlbumForm');
// });

export default albumRouter;
