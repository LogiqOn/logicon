const base = require('../../jest.config.base');
const packageJson = require('./package');

module.exports = {
  ...base,
  testEnvironment: 'node', // This is overriden, from the base testEnvironment
  displayName: packageJson.name,
};
