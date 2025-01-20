import { expect, test } from '@playwright/test'
// test.describe.configure({ mode:'parallel' })  for all describe blocks in file
// By default execute in parallel
// Make fullyParallel: false, for seral mode
test.describe('Global mode', () => {
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
test.describe.configure({ mode: 'parallel' })
test.describe('File mode', () => {
    test.describe.configure({ mode: 'serial' })

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

