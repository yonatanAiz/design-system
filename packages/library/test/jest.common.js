const path = require('path');
const root = path.resolve(__dirname, '..');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  roots: [`${root}/src`],
  moduleDirectories: ['node_modules', '<rootdir>/src'],
  moduleNameMapper: {
    '^@/(.*)$': `${root}/src/$1`,
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: [`./jest.setup.ts`],
  testEnvironment: 'jest-environment-jsdom',
};