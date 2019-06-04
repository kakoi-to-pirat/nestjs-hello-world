import { Controller, Post, Req, Res, Body, HttpStatus } from '@nestjs/common';
import { UserService } from '../../../common/user/user.service';
import { RequestUserDTO } from '../../../common/user/request.user.dto';
import { Request, Response } from 'express';

@Controller('v1/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Post('login')
  login(@Body() requestUserDTO: RequestUserDTO, @Res() res: Response) {
    const user = this.userService.findUser(requestUserDTO);

    if (!user) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        "statusCode": HttpStatus.UNAUTHORIZED,
        "error": "Unauthorized"
      });
    }

    const userToken = this.userService.getToken();
    res.status(HttpStatus.OK).json(userToken);
  }
}
