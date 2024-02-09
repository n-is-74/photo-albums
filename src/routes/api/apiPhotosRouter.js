import express from 'express';
import { Photo } from '../db/models';

const apiPhotoRouter = express.Router();

apiAlbumRouter.post('/', async (req, res) => {
  try {
    const { title, img, albumId } = req.body;

    
    const newPhoto = await Photo.create({
      title,
      img,
      album_id: albumId,
    });

    res.status(201).json(newPhoto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default apiPhotoRouter;
