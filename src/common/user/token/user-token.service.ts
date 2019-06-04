import { Injectable } from '@nestjs/common';
import { UserToken } from './user-token';
const randomstring = require("randomstring");

@Injectable()
export class UserTokenService {
    constructor(
        private readonly userToken: UserToken,
    ) { }

    setUserToken(token: string): void {
        this.userToken.token = token;
    }

    getUserToken(): UserToken {
        return this.userToken;
    }

    generateToken(): any {
        const token = randomstring.generate();
        this.setUserToken(token);

        return this;
    }
}
