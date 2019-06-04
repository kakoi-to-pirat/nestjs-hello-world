import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/user/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/v1/user/login')
      .send({ email: 'admin@admin.ru', password: '12345678' })
      .expect('Content-Type', /json/)
      .expect(200)
  });

  it('/user/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/v1/user/login')
      .send({ email: 'user@user.ru', password: '87654321' })
      .expect('Content-Type', /json/)
      .expect(200)
  });

  it('/user/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/v1/user/login?email=fake@user.ru&password=0000')
      .expect('Content-Type', /json/)
      .expect(401, {
        "statusCode": 401,
        "error": "Unauthorized"
      });
  });
});
