import { expect, test } from '@playwright/test'
test.describe.configure({ timeout: 10000 })
test.describe('Waits Practice', () => {
    test('global timeout ', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui', { waitUntil: "load" });
        await page.waitForSelector('a');
        await page.locator('abcde').click();
    });

    test('File level timeout ', async ({ page }) => {
        test.setTimeout(20000);
        await page.goto('https://demoapps.qspiders.com/ui', { waitUntil: "load" });
        await page.waitForSelector('a');
        await page.locator('abcde').click();
    });
    test.skip('Waits ', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui', { waitUntil: "load" });
        await page.waitForSelector('a', { timeout: 5000 });
        await page.waitForSelector('a', { state: 'attached' });
        await page.waitForTimeout(500);
        await page.waitForEvent('popup');
        await page.waitForEvent('download');
        await page.waitForRequest("", { timeout: 200 });
        await page.waitForLoadState('domcontentloaded');

    });
})
// default timeout of test: 30seconds
// expect timeout : 5 seconds
