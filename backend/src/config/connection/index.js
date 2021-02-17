import Sequelize from 'sequelize';
import config from '../database/databaseService';
import userModel from '../../presenter/userModel';

const models = [userModel];

const connection = new Sequelize(config);

models.forEach((model) => model.init(connection));

export default models;
