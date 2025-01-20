import { expect, test } from '@playwright/test';

test.describe('Radio Box Handling', () => {
    var radioButtons = '[type="radio"] +span'
    var radioButtonInput = '[type="radio"]'

    test('Print all radio buttons by Locator Method', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui/radio?sublist=0');
        await page.waitForTimeout(5000);
        const radioElements = page.locator(radioButtons);
        const length = await radioElements.count();
        for (let i = 0; i < length; i++) {
            const radioButtonName = await radioElements.nth(i).textContent();
            console.log("Printing radio buttons by locator method: ", radioButtonName);

        }
    });
    test('Print all radio buttons by $$ Method', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui/radio?sublist=0');
        await page.waitForTimeout(5000);
        const radioElements = await page.$$(radioButtons);
        const length = radioElements.length;
        for (const radioElement of radioElements) {
            const radioButtonName = await radioElement.textContent();
            console.log("Printing radio buttons by $$ method: ", radioButtonName);
        }
    });
    test('Check radio buttons by $$ Method', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui/radio?sublist=0');
        await page.waitForTimeout(3000);
        const radioElements = await page.$$(radioButtonInput);
        const length = radioElements.length;
        for (const radioElement of radioElements) {
            const radioButton = await radioElement.$('+span');
            const radioButtonName = await radioButton?.textContent();
            if (radioButtonName === 'Credit/Debit/ATM card') {
                radioElement.check();
                await page.waitForTimeout(3000);

            }
        }
    });
    test('Validate Radio Button is checked by $$ Method', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui/radio?sublist=0');
        await page.waitForTimeout(3000);
        const radioElements = await page.$$(radioButtonInput);
        const length = radioElements.length;
        for (const radioElement of radioElements) {
            const radioButton = await radioElement.$('+span').then(async (radio) => {
                const radioButtonName = await radio?.textContent();
                if (radioButtonName === 'Credit/Debit/ATM card') {
                    radioElement.check();
                    await page.waitForTimeout(3000);
                    console.log(`is this ${radioButtonName} checked:`, await radioElement.isChecked());
                    expect(await radioElement?.isChecked).toBeTruthy;
                }

            });

        }
    });
});