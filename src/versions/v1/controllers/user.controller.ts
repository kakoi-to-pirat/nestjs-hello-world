import { Controller, Post, Req, Res, Query, HttpStatus } from '@nestjs/common';
import { UserService } from '../../../common/user/user.service';
import { UserDTO } from '../../../common/user/user.dto';
import { Request, Response } from 'express';

@Controller('v1/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Post('login')
  login(@Query() user: UserDTO, @Res() res: Response) {
    const isUserExists = !!this.userService.findUser(user);

    if (!isUserExists) {
      res.status(HttpStatus.UNAUTHORIZED).json({
        "statusCode": 401,
        "error": "Unauthorized"
      });
      return;
    }

    const userToken = this.userService.getToken();
    res.status(HttpStatus.OK).json(userToken);
  }
}
