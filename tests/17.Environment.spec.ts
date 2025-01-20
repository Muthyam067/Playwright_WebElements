import { test } from '@playwright/test'
test.describe('Environments Practice', () => {
    test.only('Env Practice By Playwright1.config file', async ({ page }) => {
        // npx playwright test --config=playwright1.config.ts  --project=Development
        await page.goto('/')
        console.log(await page.url());
    });
});