// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './test',
  testMatch: ['**/test/**/*.test.ts'],
  use: {
    headless: false,
    browserName: 'chromium',
    baseURL: 'http://localhost:3000',
  },
};

module.exports = config;