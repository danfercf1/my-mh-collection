import { NextFunction, Request, Response } from 'express';
import { ArtistModel } from '../../models/artist';

export class ArtistController {
  all(req: Request, res: Response, next: NextFunction): void {
    ArtistModel.find()
      .then(r => res.json(r))
      .catch(err => {
        err.status = 400;
        return next(err);
      });
  }

  create(req: Request, res: Response, next: NextFunction): void {
    ArtistModel.create(req.body)
      .then(r => {
        res
          .status(201)
          .location(`/api/v1/artists/${r.id}`)
          .json(r);
      })
      .catch(err => {
        err.status = 400;
        return next(err);
      });
  }

  byId(req: Request, res: Response, next: NextFunction): void {
    const id = req.params['id'];
    ArtistModel.findById(id)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      })
      .catch(err => {
        err.status = 400;
        return next(err);
      });
  }

  deleteById(req: Request, res: Response, next: NextFunction): void {
    const id = req.params['id'];
    ArtistModel.findByIdAndDelete(id)
      .then(r => {
        if (r) {
          res.status(204).end();
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        err.status = 400;
        return next(err);
      });
  }
}
export default new ArtistController();
