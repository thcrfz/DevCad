import faker from 'faker';
import { factory } from 'factory-girl';
import userModel from '../src/presenter/userModel';

factory.define('userModel', userModel, {
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export default factory;
