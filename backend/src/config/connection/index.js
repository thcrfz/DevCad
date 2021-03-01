import Sequelize from 'sequelize';
import config from '../database/databaseService';
import developerModel from '../../presenter/developerModel';
import languageModel from '../../presenter/languageModel';

const models = [developerModel, languageModel];

const connection = new Sequelize(config);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

export default models;
