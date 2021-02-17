import Sequelize, { Model } from 'sequelize';

export default class userModel extends Model {
  static init(sequelize) {
    super.init({
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
      tableName: 'users',
    });

    return this;
  }
}
