import Sequelize, { Model } from 'sequelize';

export default class developerModel extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: ['Name should have between 3 an 255 characters.'],
          },

        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: { msg: 'Email already exists.' },
        validate: {
          isEmail: { msg: 'Email invalid.' },
        },
      },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: { msg: 'Age should have to be a integer' },
        },
      },
      url: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isUrl: { msg: 'Field should have to be a url type.' },
        },
      },
    }, {
      sequelize,
      tableName: 'developers',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.userModel, { foreignKey: 'user_id' });
    this.hasMany(models.languageModel, { foreignKey: 'developer_id' });
  }
}
