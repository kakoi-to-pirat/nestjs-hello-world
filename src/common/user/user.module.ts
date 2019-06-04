import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserTokenService } from './token/user-token.service';
import { UserToken } from './token/user-token';

@Module({
  providers: [
    UserService,
    UserTokenService,
    UserToken,
  ],
  exports: [
    UserService,
  ],
})
export class UserModule {}
