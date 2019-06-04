import { Controller, Post, Req, Res, Query, HttpStatus } from '@nestjs/common';
import { UserService } from '../../../common/user/user.service';
import { Request, Response } from 'express';

@Controller('v1/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Post('login')
  login(
    @Query() query,
    @Res() res: Response
  ) {
    console.log(HttpStatus);

    res.status(HttpStatus.UNAUTHORIZED).json({
      "statusCode": 401,
      "error": "Unauthorized"
    });
  }
}
