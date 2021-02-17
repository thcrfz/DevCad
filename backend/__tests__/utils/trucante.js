import models from '../../src/config/connection';

// eslint-disable-next-line max-len
module.exports = () => Promise.all(Object.keys(models).map((key) => models[key].destroy({ truncate: true, force: true })));
