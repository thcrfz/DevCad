import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import './config/connection';
import userRoutes from './frameworks/web/routes/userRoutes';
import sessionRoutes from './frameworks/web/routes/sessionRoutes';
import developerRoutes from './frameworks/web/routes/developerRoutes';
import languagesRoutes from './frameworks/web/routes/languagesRoutes';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const whiteList = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://34.95.158.147',
];

const corsOption = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by cors'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOption));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/users', userRoutes);
    this.app.use('/developers', developerRoutes);
    this.app.use('/sessions', sessionRoutes);
    this.app.use('/languages', languagesRoutes);
  }
}
export default new App().app;
