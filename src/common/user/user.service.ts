import { Injectable } from '@nestjs/common';
import { User } from './user';
import { UserDTO } from './user.dto';
import { UserTokenService } from './token/user-token.service';

@Injectable()
export class UserService {
  private users = [
    new User('admin@admin.ru', '12345678'),
    new User('user@user.ru', '87654321'),
  ];

  constructor(
    private readonly userTokenService: UserTokenService,
  ) { }

  getToken(user: UserDTO): string {
    return '73JQJ1EDPs6WzjBHprczymBIobdkyVRc';
  }
}
