import { test } from '@playwright/test'
test.describe('Environments Practice', () => {
    test.only('Env Practice By Playwright1.config file', async ({ page }) => {
        // npx playwright test --config=playwright1.config.ts  --project=Development
       // npx playwright test  --project=Development
        console.log("ENv:" ,process.env.ENV ,process.env.BASE_URL)
       // await page.goto(process.env.USERNAME)

    });
});