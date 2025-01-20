import { chromium, expect, Page, test } from '@playwright/test'
test.describe.skip('Order of Hooks Execute', () => {
    test.describe.configure({ mode: 'serial' })
    var count = 0;
    test.beforeEach(async () => {
        console.log("Before Each", count++);
    })
    test.afterEach(async () => {
        console.log("After Each", count++);
    })
    test.beforeAll(async () => {
        console.log("Before All", count++);
    })
    test.afterAll(async () => {
        console.log("After All", count++);
    })
    test('First testcase', async ({ page }) => {
        console.log("Executing first testcase");
    })
    test('Second testcase', async ({ page }) => {
        console.log("Executing second testcase");
    })

})

test.describe('Hooks Execute', () => {
    var page: Page;
    test.beforeEach(async () => {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    })
    test('First testcase', async () => {
        console.log("Title of testcase:", await page.title());
    })
    test('Second testcase', async () => {
        console.log("Title of testcase:", await page.title());
    })

});

test.describe.skip('Hooks Execute2', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    })
    test('First testcase', async ({ page }) => {
        console.log("Title of testcase2:", await page.title());
    })
    test('second testcase', async ({ page }) => {
        console.log("Title of testcase3:", await page.title());
    })

});


