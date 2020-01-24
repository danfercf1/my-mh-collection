import { Application } from 'express';
import albumsRouter from './api/controllers/albums/router';
export default function routes(app: Application): void {
  app.use('/api/v1/albums', albumsRouter);
}
