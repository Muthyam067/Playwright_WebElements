import { test, expect } from '@playwright/test'
test.describe.configure({ retries: 2 })
test.describe('Retry Practice', () => {

    test('Retry for Flaky testcase ', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        await expect(page).toHaveTitle("flakyTestcase");
    });
    test('File levelRetry for Flaky testcase ', async ({ page }) => {

        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        await expect(page).toHaveTitle("flakyTestcase");
    });
});