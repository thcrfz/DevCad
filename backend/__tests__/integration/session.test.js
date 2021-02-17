import request from 'supertest';
import userModel from '../../src/presenter/userModel';
import '../../src/config/connection';
import app from '../../src/main';

describe('Authentication', () => {
  it('should authenticate with valid credentials', async () => {
    const user = await userModel.create({
      email: 'amanda@hotmail.com',
      password_hash: '1234567',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '1234567',
      });

    expect(response.status).toBe(200);
  });
});
