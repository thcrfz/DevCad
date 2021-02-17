import Sequelize, { Model } from 'sequelize';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

export default class userModel extends Model {
  static init(sequelize) {
    super.init({
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email already exist.',
        },
        validate: {
          isEmail: {
            msg: 'Email invalid.',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
      },
    }, {
      sequelize,
      tableName: 'users',
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        // eslint-disable-next-line no-param-reassign
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }

  generateToken() {

  }
}
