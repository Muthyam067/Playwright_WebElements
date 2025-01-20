import { test } from '@playwright/test'
test.describe('Keyboard Practice', () => {
    var userNameField = 'input[name="name"]';
    var emailField = 'input[name="email"]';

    test('Back space and enter', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui');
        const userName = page.locator(userNameField);
        await userName.fill("Admin");
        await userName.press('Backspace');
        await userName.press('Enter');
        await page.waitForTimeout(5000);
    });
    test('Page down', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        await page.locator('body').press('PageDown');
        await page.locator('body').press('PageDown');
        await page.locator('body').press('PageDown');
        await page.waitForTimeout(5000);
    });
    test('Copy and Paste', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui');
        const userName = page.locator(userNameField);
        const email = page.locator(emailField);
        await userName.fill("Admin@123");
        await userName.press('Control+a');
        await userName.press('Control+c');
        await email.press('Control+v');
        await page.waitForTimeout(5000);

    });

    test.skip('new Tab', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui');
        const userName = page.locator(userNameField);
        await page.keyboard.down('Control');
        await page.keyboard.press('t');
        await page.keyboard.up('Control');
        await page.waitForTimeout(5000);

    });
    test.skip('ENTER Capital Letters', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui');
        const userName = page.locator(userNameField);
        await userName.click();
        for (let letter of 'hello world') {
            userName.press(`Shift+${letter}`)
        }
        await page.waitForTimeout(5000);
    });

});