import { test, expect } from '@playwright/test'
test.describe('Page settings ', () => {

    test('Page Methods', async ({ context }) => {
        const page = await context.newPage();
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        console.log("View port size:", await page.viewportSize())
        await page.setViewportSize({ width: 500, height: 300 })
        //await page.goBack();
        //await page.goForward()
        page.setDefaultTimeout(30000); // 30 seconds//Sets the default timeout for all page operations (e.g., click, waitForSelector).

    });

    test.only('Cookies', async ({ context }) => {
        const page = await context.newPage();
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        await context.addCookies([
            {
                name: 'session_id',
                value: '123456',
                domain: 'example.com',
                path: '/',
                httpOnly: true,
                secure: true
            }
        ]);
        const cookies = await context.cookies();
        console.log("cookies", cookies);
        // get
        const getCookie = await context.clearCookies();
        const cookies1 = await context.cookies();
        console.log("cleared cookies:", cookies1)

    });
});