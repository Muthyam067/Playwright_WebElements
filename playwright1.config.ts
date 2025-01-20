import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  timeout:60000,
  testMatch:["tests/18.TestMatch.spec.ts"],
  //testMatch:'**/spec.ts'
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries:2 ,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    headless:false,
    //screenshot:'on'
   // screenshot:'only-on-failure'
   //video:'on'

  },

  /* Configure projects for major browsers */
 
  projects: [
    {
      name: 'Development',
      use: {
        baseURL: 'http://dev.example.com',
        browserName: 'chromium',  // or 'firefox', 'webkit'
        headless: true,  // Set to false if you want to run in non-headless mode
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure',  // Capture screenshot only on failure
        video: 'retain-on-failure',  // Save video for failed tests
      },
    },
    {
      name: 'Staging',
      use: {
        baseURL: 'http://staging.example.com',
        browserName: 'firefox',
        headless: false,
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'Production',
      use: {
        baseURL: 'http://example.com',
        browserName: 'webkit',
        headless: true,
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
