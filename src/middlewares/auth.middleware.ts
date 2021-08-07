import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { ResponseHandler } from '../helpers/responseHandler.helper';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.headers.authorization;
  if (!token) {
    const message = 'Token is required';
    return ResponseHandler.sendResponse(res, 401, false, message);
  } else {
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (error: any) => {
      if (error) {
        return ResponseHandler.sendResponse(res, 403, true, error.message);
      }

      next();
    });
  }
};
