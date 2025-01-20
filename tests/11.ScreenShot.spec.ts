import { test, expect } from '@playwright/test'
test.describe('Screen Shot Practice', () => {
    var userNameField = 'input[id="autocomplete"]';
    test.afterEach(async({page},testInfo) => {
        console.log("File level After Each:", testInfo.title, testInfo.status);
        if(testInfo.status=='failed'){
            await page.screenshot({path:"Screenshots/afterEach.png"});
        }
    })
    test('Page ScreenShot', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/', { waitUntil: "load" });
        await page.screenshot({ path: 'Screenshots/Screenshot.png' })
    });
    test('Element ScreenShot', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/', { waitUntil: "load" });
        await page.waitForTimeout(3000);
        const userName = page.locator(userNameField);
        await userName.screenshot({ path: 'Screenshots/Element.png' });

    });
    test('Global ScreenShot', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/', { waitUntil: "load" });
        await page.waitForTimeout(3000);
        // by default stored in test-result folder
        // set screenshot:'on'
    });
    test('Failure ScreenShot', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/', { waitUntil: "load" });
        await expect(page).toHaveTitle("failTestcase");
        // set screenshot:'only-on-failure'

    });

    test.skip('File ScreenShot', async ({ page }) => {
        test.use({ screenshot: 'on' })
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/', { waitUntil: "load" });
        await page.waitForTimeout(3000);

    });
});