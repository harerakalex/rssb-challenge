import { Request, Response, NextFunction } from 'express';
import reader from 'xlsx';

import { ResponseHandler } from '../helpers/responseHandler.helper';
import { formatFileData } from '../helpers/file.helper';

export class ValidationMiddleware {
  static fileValidator(req: Request, res: Response, next: NextFunction) {
    const file = req.file;

    if (!file) {
      const message = 'userList is reuired and it should be an excel file';
      return ResponseHandler.sendResponse(res, 400, false, message);
    }

    if (file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      const message = 'Invalid File Type ' + file.mimetype;
      return ResponseHandler.sendResponse(res, 400, false, message);
    }

    const readFile = reader.readFile(req.file.path);
    req.body = formatFileData(readFile);

    return next();
  }

  static fileTitlesValidator(req: Request, res: Response, next: NextFunction) {
    const columns = ['names', 'nid', 'phone', 'gender', 'email'];

    const keys = Object.keys(req.body[0]);

    keys.forEach((element) => {
      if (!columns.includes(element)) {
        const message = `Invalid file, ${element} does not belong to ${columns}`;
        return ResponseHandler.sendResponse(res, 400, false, message);
      }
    });

    return next();
  }
}
