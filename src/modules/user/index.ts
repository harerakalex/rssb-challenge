import { Router } from 'express';

import { UserController } from './user.contoller';
import { MulterMiddleware } from '../../middlewares/multer.middleware';
import { ValidationMiddleware } from '../../middlewares/validation.middleware';
import { verifyToken } from '../../middlewares/auth.middleware';

export const userRouter = Router();

// Endpoint to read a file
userRouter.get(
  '/',
  verifyToken,
  MulterMiddleware.multerValidation,
  ValidationMiddleware.fileValidator,
  ValidationMiddleware.fileTitlesValidator,
  UserController.fileReader,
);

// Endpoint to retieve validated list
userRouter.get(
  '/validation',
  verifyToken,
  MulterMiddleware.multerValidation,
  ValidationMiddleware.fileValidator,
  ValidationMiddleware.fileTitlesValidator,
  UserController.dataValidation,
);

// Endpoint to save all users
userRouter.post(
  '/',
  verifyToken,
  MulterMiddleware.multerValidation,
  ValidationMiddleware.fileValidator,
  ValidationMiddleware.fileTitlesValidator,
  UserController.saveAllUsers,
);

// Endpoint to generate token
userRouter.get('/token', UserController.getToken);
