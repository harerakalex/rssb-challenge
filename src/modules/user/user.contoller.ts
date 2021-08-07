import { Request, Response } from 'express';

import { ResponseHandler } from '../../helpers/responseHandler.helper';
import { fieldsValidator } from '../../helpers/validator.helper';
import { paginator } from '../../helpers/pagination.helper';
import { UserService } from './user.service';
import { generateToken } from '../../helpers/auth.helper';

export class UserController {
  static async fileReader(req: Request, res: Response) {
    try {
      const data = req.body;
      const message = 'Successfully read the file';
      return ResponseHandler.sendResponse(res, 200, true, message, data.slice(0, 10));
    } catch (error) {
      return ResponseHandler.sendErrorResponse(res, error);
    }
  }

  static async dataValidation(req: Request, res: Response) {
    try {
      const data = fieldsValidator(req.body);

      const { limit, offset } = paginator(
        data.length,
        parseInt(req.query.page as any, 10),
        parseInt(req.query.limit as any, 10),
      );

      const paginateResult = data.slice(offset, offset + limit);
      const message = 'Successfully validate the file';
      return ResponseHandler.sendResponse(res, 200, true, message, paginateResult);
    } catch (error) {
      return ResponseHandler.sendErrorResponse(res, error);
    }
  }

  static async saveAllUsers(req: Request, res: Response) {
    try {
      const createUsers = await UserService.saveUsers(req.body);

      const message = 'Users created Successfully';
      return ResponseHandler.sendResponse(res, 200, true, message, createUsers);
    } catch (error) {
      return ResponseHandler.sendErrorResponse(res, error);
    }
  }

  static async getToken(req: Request, res: Response) {
    try {
      const token = generateToken();

      const message = 'Successfully Generated JWT token';
      return ResponseHandler.sendResponse(res, 200, true, message, { token });
    } catch (error) {
      return ResponseHandler.sendErrorResponse(res, error);
    }
  }
}
