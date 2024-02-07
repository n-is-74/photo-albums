import express from 'express';
import redirectIfAuth from '../middlewares/redirectIfAuth';

const authRouter = express.Router();

authRouter.get('/', redirectIfAuth, (req, res) => res.render('AuthPage'));

export default authRouter;
