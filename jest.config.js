module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    'Backend/**/*.js',
    'blockchain/**/*.js',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/*.config.js',
    '!**/coverage/**'
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};
