import { test } from '@playwright/test'
test.describe('test Match execute ', () => {
    // set  testMatch:["tests/18.TestMatch.spec.ts"],
    var count = 0;
    test('First testcase', async ({ page }) => {
        console.log("Executing first testcase:", count++);
    })
    test('Second testcase', async ({ page }) => {
        console.log("Executing second testcase:", count++);
    })
    test('Third testcase', async ({ page }) => {
        console.log("Executing third testcase:", count++);
    })
})