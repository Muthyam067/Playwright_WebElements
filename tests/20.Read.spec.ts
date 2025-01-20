import { test } from '@playwright/test'
import Read from '../Data/Read.json'
import * as fs from 'fs'
test.describe('Read Json file', () => {

    test('Reading json file By importing', async ({ page }) => {
        console.log("User Data", Read.user);
        console.log("Settings Data", Read.settings);
        console.log("Tasks data", Read.tasks)

    })
    test.only('Reading json file By using fs system', async ({ page }) => {
        console.log("hello world");
        const file =  fs.readFileSync('Data/Read.json','utf-8'); // return string
         const data = JSON.parse(file);
         console.log("data:",data.user);


    })
});