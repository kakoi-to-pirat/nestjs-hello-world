import { Injectable } from '@nestjs/common';
import { User } from './user';
import { UserDTO } from './user.dto';
import { UserTokenService } from './token/user-token.service';
import { UserToken } from './token/user-token';
import { _ } from 'lodash';

@Injectable()
export class UserService {
  private users = [
    new User('admin@admin.ru', '12345678'),
    new User('user@user.ru', '87654321'),
  ];

  constructor(
    private readonly userTokenService: UserTokenService,
  ) { }

  findUser(user: UserDTO): User {
    return _.find(this.users, user);
  }

  getToken(): UserToken {
    this.userTokenService.generateToken();
    const token = this.userTokenService.getUserToken();

    return token;
  }
}
