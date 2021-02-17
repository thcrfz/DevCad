import express from 'express';
import dotenv from 'dotenv';
import './config/connection';
import userRoutes from './frameworks/web/routes/userRoutes';
import sessionRoutes from './frameworks/web/routes/sessionRoutes';
import developerRoutes from './frameworks/web/routes/developerRoutes';
import languagesRoutes from './frameworks/web/routes/languagesRoutes';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
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
