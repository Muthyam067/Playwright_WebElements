import { test, expect } from '@playwright/test'
test.describe('Assertions ', () => {

    test('Title and Url', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        // Must equal with case
        await expect(page).toHaveURL('https://rahulshettyacademy.com/automationPractice/', { ignoreCase: true });
        await expect(page).toHaveTitle('Practice Page');

        const title = await page.title();
        const url = page.url();

        expect(title).toEqual("Practice Page");
        expect(url).toEqual('https://rahulshettyacademy.com/AutomationPractice/');

        expect(title).toBe("Practice Page");
        expect(url).toBe('https://rahulshettyacademy.com/AutomationPractice/');
    })

    test('Assertions 2 of equal and to be', async ({ page }) => {

        // await expect(2).toBe("2");  //fails
        expect(2).toBe(2);
        const a = {
            name: "softwareBoy"
        }
        const b = {
            name: "softwareBoy"
        }
        expect(a).toBe(a);
        //  expect(a).toBe(b); // fails Object.is equality  If it should pass with deep equality, replace "toBe" with "toStrictEqual"
        expect(a).toEqual(b)
        expect("abcd").toContain("cd");

    })
    test('Assertions 3 of false and true', async ({ page }) => {
        expect("abcd").toBeTruthy();
        expect(2).toBeTruthy();
        expect(-1).toBeTruthy();

        expect("").toBeFalsy();
        expect(0).toBeFalsy();
        expect(null).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect(NaN).toBeFalsy();
        expect(22).not.toBeNaN();
    });

    test.skip('Assertions 4 of Have', async ({ page }) => {
        expect(page.locator('body')).toBeAttached();
        expect(page.locator('body')).toHaveAttribute('classname','value');
        expect(page.locator('body')).toHaveAttribute('classname');
        expect(page.locator('body')).toHaveCSS('a','b');
        expect(page.locator('body')).toHaveClass('className');
        expect(page.locator('body')).toHaveId('idName');
        expect(page.locator('body')).toBeFocused();
        expect(page.locator('body')).toBeEmpty();
        expect(page.locator('body')).toHaveCount(3);
    });

});