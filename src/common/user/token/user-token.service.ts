import { Injectable } from '@nestjs/common';
import { UserToken } from './user-token';
const randomstring = require("randomstring");

@Injectable()
export class UserTokenService {
    constructor(
        private readonly userToken: UserToken,
    ) { }

    generateToken(): UserToken {
        const token = randomstring.generate();

        this.userToken.setToken(token);
        return this.userToken;
    }
}
