import { User } from '../../database';

export class UserService {
  static async saveUsers(users: any) {
    const result = await User.bulkCreate(users);
    return result;
  }
}
