import { Application } from 'express';
import albumsRouter from './api/controllers/albums/router';
import artistsRouter from './api/controllers/artists/router';
export default function routes(app: Application): void {
  app.use('/api/v1/albums', albumsRouter);
  app.use('/api/v1/artists', artistsRouter);
}
