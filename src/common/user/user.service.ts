import { Injectable } from '@nestjs/common';
import { User } from './user';
import { RequestUserDTO } from './request.user.dto';
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

  findUser(requestUserDTO: RequestUserDTO): User {
    if (_.isEmpty(requestUserDTO)) {
      return null;
    }

    return _.find(this.users, requestUserDTO);
  }

  getToken(): UserToken {
    return this.userTokenService.generateToken();
  }
}
