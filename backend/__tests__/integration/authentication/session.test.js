import request from 'supertest';
import '../../../src/config/connection';
import app from '../../../src/main';
import truncate from '../../utils/trucante';
import factory from '../../factories';

describe('Authentication', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should authenticate with valid credentials', async () => {
    const user = await factory.create('userModel', {
      password: '1234567',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '1234567',
      });

    expect(response.status).toBe(200);
  });

  it('should not authenticate with invalid credentials', async () => {
    const user = await factory.create('userModel', {
      password: '1234567',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123',
      });

    expect(response.status).toBe(401);
  });

  it('should return jwt token when authenticate', async () => {
    const user = await factory.create('userModel', {
      password: '1234567',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '1234567',
      });

    expect(response.body).toHaveProperty('token');
  });
});
