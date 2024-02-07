import express from 'express';
// import { User } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  res.render('MainPage');
});

export default router;
