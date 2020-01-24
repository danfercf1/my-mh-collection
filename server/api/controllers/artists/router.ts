import express from 'express';
import ArtistController from './controller';
export default express
  .Router()
  .post('/', ArtistController.create)
  .get('/', ArtistController.all)
  .get('/:id', ArtistController.byId)
  .delete('/:id', ArtistController.deleteById);
