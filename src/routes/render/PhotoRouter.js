import express from 'express';
import redirectIfNotAuth from '../../middlewares/redirectIfNotAuth';
import { Photo } from '../../../db/models';

const photoRouter = express.Router();

photoRouter.get('/:albumId', redirectIfNotAuth, async (req, res) => {
  const { albumId } = req.params;
  try {
    // Получение фотографий, принадлежащих данному альбому
    const photos = await Photo.findAll({
      where: { album_id: albumId },
    });

    res.render('OneAlbumPage', { photos });
    // res.json({ photos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default photoRouter;
