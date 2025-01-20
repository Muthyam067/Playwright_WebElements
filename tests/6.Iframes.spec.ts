import { expect, test } from '@playwright/test';
import { console } from 'inspector';

test.describe('Iframes Practice', () => {
    test('single IFrame', async ({ page }) => {
        await page.goto('https://demo.automationtesting.in/Frames.html');
        const frame = await page.frame({ url: 'https://demo.automationtesting.in/SingleFrame.html' });
        const frame1 = page.frameLocator('[id="singleframe"]');
        frame1.locator('[type="text"]').fill("Method1");
        await page.waitForTimeout(5000);
        await frame?.locator('[type="text"]').fill("Method2");
        await page.waitForTimeout(5000);
    });
    test('Nested Iframe', async ({ page }) => {
        await page.goto('https://demo.automationtesting.in/Frames.html');
        await page.getByText('Iframe with in an Iframe', { exact: true }).click();
        const parentFrame = page.frame({ url: 'https://demo.automationtesting.in/MultipleFrames.html' });
        const childFrame = parentFrame?.frameLocator('[src="SingleFrame.html"]')
        childFrame?.locator('[type="text"]').fill("Nested Iframe");
        await page.waitForTimeout(5000);
    });
    test.skip('Multiple IFrame', async ({ page }) => {
        await page.goto('https://demo.automationtesting.in/Frames.html');
        const framsList = page.frames();
        console.log("number of frames", framsList.length);
    });
});