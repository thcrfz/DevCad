import Sequelize from 'sequelize';
import databaseService from '../database/databaseService';
import userModel from '../../presenter/user';

const models = [userModel];

const connection = new Sequelize(databaseService);

models.forEach((model) => model.init(connection));
