import express from 'express';
import { Album, Access } from '../db/models';

const router = express.Router();

// Получение списка альбомов, доступных пользователю
router.get('/', async (req, res) => {
  const userId = req.locals.user.id; // ID текущего пользователя

  try {
    // Получение всех альбомов, к которым у пользователя есть доступ
    const accessibleAlbums = await Access.findAll({
      where: { userAccessId: userId },
      include: [{ model: Album }]
    }).then(accesses => accesses.map(access => access.Album));

    res.json({ accessibleAlbums });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Создание нового альбома
router.post('/', async (req, res) => {
  const { name, title, private } = req.body;
  const userId = req.locals.user.id; // ID текущего пользователя

  try {
    const newAlbum = await Album.create({ name, title, private, authorId: userId });
    await Access.create({ albumId: newAlbum.id, userAccessId: userId }); // Даём пользователю доступ к созданному альбому
    res.status(201).json(newAlbum);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
