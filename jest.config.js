const path = require('path');

const file = path.join(path.resolve('./'), '/tests/infra/db/test-environment.js');
console.log('file', file);

module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  moduleNameMapper: {
    '@/tests/(.+)': '<rootDir>/tests/$1',
    '@/(.+)': '<rootDir>/src/$1'
  },
  roots: [
    '<rootDir>/tests'
  ],
  transform: {
    '\\.ts$': 'ts-jest'
  },
  clearMocks: true,
  setupFiles: ['dotenv/config'],
  globalSetup : '<rootDir>/tests/global-setup.js',
  globalTeardown : '<rootDir>/tests/global-teardown.js'
}
