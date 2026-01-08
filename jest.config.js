module.exports = {
  testEnvironment: 'jsdom',
  verbose: true,
  moduleFileExtensions: ['js'],
  testMatch: ['**/tests/unit/**/*.test.js'],
  transform: {}, // No transform needed for vanilla JS
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    'js/**/*.js',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
