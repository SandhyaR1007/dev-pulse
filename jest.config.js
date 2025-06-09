// jest.config.ts
import { createDefaultPreset } from 'ts-jest';

/** @type {import("jest").Config} */
export default {
  ...createDefaultPreset(),
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
