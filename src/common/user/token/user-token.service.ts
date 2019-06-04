import { Injectable } from '@nestjs/common';
import { UserToken } from './user-token';
const randomstring = require("randomstring");

@Injectable()
export class UserTokenService {
    constructor(
        private readonly userToken: UserToken,
    ) { }

    private setUserToken(token: string): void {
        this.userToken.token = token;
    }

    generateToken(): UserToken {
        const token = randomstring.generate();

        this.setUserToken(token);
        return this.userToken;
    }
}
