import bcryptjs from 'bcryptjs';

import userModel from '../../src/presenter/userModel';
import truncate from '../utils/trucante';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password', async () => {
    const user = await userModel.create({
      email: 'thiago@hotmail.com',
      password: '1234567',
    });

    const hash = await bcryptjs.hash('1234567', 8);

    const compareHash = await user.passwordIsValid('1234567');

    expect(compareHash).toBe(true);
  });
});
