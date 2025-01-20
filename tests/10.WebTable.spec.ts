import { test } from '@playwright/test'
import * as fs from 'fs';

test('Web table handling', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const rows = await page.$$('[name="courses"] tr');
    await page.waitForLoadState();
    console.log(rows.length);
    // const tableData;

});
