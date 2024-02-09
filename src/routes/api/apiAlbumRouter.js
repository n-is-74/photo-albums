import express from 'express';
import { Album, Access, User } from '../../../db/models';

const apiAlbumRouter = express.Router();

// Получение списка альбомов, доступных пользователю
apiAlbumRouter.get('/', async (req, res) => {
  const { user } = req.locals;
  const userId = user.id;

  try {
    // Получение всех альбомов, к которым у пользователя есть доступ
    const accesses = await Access.findAll({
      where: { userAccessId: userId },
      include: [{ model: Album }],
    });

    // Используем деструктуризацию для извлечения альбомов
    const accessibleAlbums = accesses.map(({ Albums }) => Albums);

    res.json({ accessibleAlbums });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

apiAlbumRouter.post('/', async (req, res) => {
  try {
    // const { user } = req.locals;
    const { name, privates, userUniqueValue } = req.body;

    const newAlbum = await Album.create({
      a_name: name,
      author_id: res.locals.user.id,
      private: privates,
    });

    const userUnique = await User.findOne({ where: { email: userUniqueValue } });

    if (userUnique) {
      await Access.create({
        user_id: userUnique.id,
        album_id: newAlbum.id,
      });
    }

    res.status(201).json(newAlbum);
  } catch (error) {
    // Отправка ошибки сервера в случае возникновения проблем
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default apiAlbumRouter;
