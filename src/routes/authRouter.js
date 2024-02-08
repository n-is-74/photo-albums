import express from 'express';
import redirectIfAuth from '../middlewares/redirectIfAuth';

const authRouter = express.Router();

authRouter.get('/', redirectIfAuth, (req, res) => res.render('AuthPage'));
authRouter.get('/signup', redirectIfAuth, (req, res) => res.render('SignupPage'));

export default authRouter;
