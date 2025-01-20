import { test } from '@playwright/test'
test.describe('Tagging Practice', () => {
    var count = 0;
    // npx playwright test tests/19.Tagging.spec.ts --grep="@smoke"
   // npx playwright test tests/19.Tagging.spec.ts --grep "@smoke"
   //npx playwright test tests/19.Tagging.spec.ts --grep "third" --based on testcase name
    test('First testcase',{tag:'@smoke'}, async ({ page }) => {
        console.log("Executing smoke testcase:", count++);
    })
    test('Second testcase', {tag:'@regression'},async ({ page }) => {
        console.log("Executing regression testcase:", count++);
    })
    test('Third testcase',{tag:'@smoke'}, async ({ page }) => {
        console.log("Executing second smoke testcase:", count++);
    })
})