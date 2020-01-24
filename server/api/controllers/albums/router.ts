import express from 'express';
import AlbumController from './controller';
export default express
  .Router()
  .post('/', AlbumController.create)
  .get('/', AlbumController.all)
  .get('/:id', AlbumController.byId)
  .delete('/:id', AlbumController.deleteById);
