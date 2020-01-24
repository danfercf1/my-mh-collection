import { NextFunction, Request, Response } from 'express';
import { Album } from '../../models/album';

export class Controller {
  all(req: Request, res: Response, next: NextFunction): void {
    Album.find()
      .then(r => res.json(r))
      .catch(err => {
        err.status = 400;
        return next(err);
      });
  }

  create(req: Request, res: Response, next: NextFunction): void {
    Album.create(req.body)
      .then(r => {
        res
          .status(201)
          .location(`/api/v1/albums/${r.id}`)
          .json(r);
      })
      .catch(err => {
        err.status = 400;
        return next(err);
      });
  }

  byId(req: Request, res: Response, next: NextFunction): void {
    const id = req.params['id'];
    Album.findById(id)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      })
      .catch(err => {
        err.status = 400;
        return next(err);
      });
  }
}
export default new Controller();
