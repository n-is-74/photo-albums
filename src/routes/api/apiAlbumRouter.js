import express from 'express';
import { Album, Access } from '../../../db/models';

const apiAlbumRouter = express.Router();

apiAlbumRouter.post('/', async (req, res) => {
  try {
    const { name, privates } = req.body;
    const authorId = res.locals.user.id;

    const newAlbum = await Album.create({
      a_name: name,
      author_id: authorId,
      private: privates,
    });

    // Добавляем запись в таблицу Access
    await Access.create({
      user_id: authorId,
      album_id: newAlbum.id,
    });

    res.status(201).json(newAlbum);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default apiAlbumRouter;
