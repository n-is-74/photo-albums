import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import resLocals from './middlewares/resLocals';
import apiAuthRouter from './routes/apiAuthRouter';
// import albumsRouter from './routes/albums';
// import photosRouter from './routes/photos';
// import cookieParser from 'cookie-parser';
// import 'dotenv/config';
import jsxRender from './utils/jsxRender';
// import resLocals from './middlewares/resLocals';
import albumRouter from './routes/AlbumRouter';
import authRouter from './routes/authRouter';
import apiAlbumRouter from './routes/apiAlbumRouter';
import mainRouter from './routes/mainRouter';

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components/pages'));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

app.use(resLocals);

app.use('/api/auth', apiAuthRouter);
// app.use('/auth', authRouter);
// app.use('/folders', albumsRouter);
// app.use('/folders/:id/photos', photosRouter);

app.use('/', authRouter);
app.use('/main', mainRouter);
app.use('/album', albumRouter);
app.use('/api/album', apiAlbumRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
