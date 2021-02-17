import Sequelize, { Model } from 'sequelize';

export default class languageModel extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: { msg: 'Invalid field empty' },
        },
      },
    }, {
      sequelize,
      tableName: 'languages',
    });
  }

  static associate(models) {
    this.belongsTo(models.developerModel, { foreignKey: 'developer_id' });
  }
}
