import { Test, TestingModule } from '@nestjs/testing';
import { UserTokenService } from './user-token.service';
import { UserToken } from './user-token';

describe('UserService', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            providers: [UserTokenService, UserToken],
        }).compile();
    });

    describe('get/set Token', () => {
        it('should return UserToken', () => {
            const userTokenService = app.get<UserTokenService>(UserTokenService);

            expect(userTokenService.generateToken()).toBeInstanceOf(UserTokenService);
            expect(userTokenService.getUserToken()).toBeInstanceOf(UserToken);
        });
    });

});