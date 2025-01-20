import { expect, test } from '@playwright/test';

test.describe('Alert Handling Practice', () => {
    var alertBox = "button[id='buttonAlert2']"
    var confirm = "button[id='buttonAlert5']"
    var prompt = "button[id='buttonAlert1']"
    test('Alert', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui/alert?sublist=0');
        page.on('dialog', async (dialog) => {
            console.log("alert Message: ", dialog.message())
            dialog.accept();

        })
        await page.locator(alertBox).click();
        await page.waitForTimeout(5000);
        const alertStatus = await page.locator('p[class="text-center pt-2"]').textContent();
        console.log("Alert status:", alertStatus);
    });

    test('Confirm', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui/alert?sublist=0');
        await page.getByText('Confirm', { exact: true }).click();
        page.on('dialog', async (dialog) => {
            console.log("Confirm Message: ", dialog.message())
            dialog.dismiss();

        })
        await page.locator(confirm).click();
        const alertStatus = await page.locator('p[class="pt-2 text-center"]').textContent();
        console.log("Alert status:", alertStatus);
        await page.waitForTimeout(10000);
    });

    test('prompt', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui/alert?sublist=0');
        await page.getByText('Prompt', { exact: true }).click();
        page.on('dialog', async (dialog) => {
            console.log("prompy Message: ", dialog.message())
            await dialog.accept("hello world");
        })
        await page.locator(prompt).click();
        await page.waitForTimeout(5000);

    });
});