import { Request, Response, NextFunction } from 'express';
import multer from 'multer';

import { ResponseHandler } from '../helpers/responseHandler.helper';

export class MulterMiddleware {
  static multerValidation(req: Request, res: Response, next: NextFunction) {
    const storage = multer.diskStorage({
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      },
    });
    const multerUploads = multer({ storage }).single('usersList');

    multerUploads(req, res, (err: any) => {
      if (err) {
        return ResponseHandler.sendErrorResponse(res, err);
      }
      next();
    });
  }
}
