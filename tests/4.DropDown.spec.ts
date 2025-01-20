import { expect, test } from '@playwright/test';

test.describe('DropDown Handling', () => {

    test('Select and deSelect for single drop down', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0');
        await page.locator('select[id="select2"]').selectOption('male');
        await page.locator('select[id="select2"]').selectOption({ index: 2 });
        await page.waitForTimeout(10000);
        await page.locator('select[id="select2"]').selectOption('');// deselect
        await page.waitForTimeout(10000);

    });

    test.skip('Select and deSelect for Mult select drop down', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0');
        page.locator('select[id="select2"]').selectOption(["option1", "option2", "opyion3"]);
        await page.waitForTimeout(3000);
        page.locator('select[id="select2"]').selectOption('');// deselect
        await page.waitForTimeout(3000);
        await page.selectOption('locator', [{ label: "0" }, { index: 0 }, { value: 'abc' }])
    });
});