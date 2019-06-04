import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserTokenService } from './token/user-token.service';
import { UserToken } from './token/user-token';
import { User } from './user';

describe('UserService', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            providers: [
                UserService,
                UserTokenService,
                UserToken
            ],
        }).compile();
    });

    describe('findUser', () => {
        it('should return User', () => {
            const userService = app.get<UserService>(UserService);

            expect(userService.findUser({ email: 'admin@admin.ru', password: '12345678' })).toBeInstanceOf(User);
            expect(userService.findUser({ email: 'user@user.ru', password: '87654321' })).toBeInstanceOf(User);
            expect(userService.findUser({ email: 'fake@user.ru', password: '000' })).toBeUndefined();
        });
    });

    describe('getToken', () => {
        it('should return UserToken', () => {
            const userService = app.get<UserService>(UserService);
            expect(userService.getToken()).toBeInstanceOf(UserToken);
        });
    });
});