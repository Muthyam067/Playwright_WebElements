import { test } from '@playwright/test'
import Read from '../Data/Read.json'
import * as fs from 'fs'
test.describe('Write into Json file', () => {

    const data = {
        user1: {
          id: 1,
          name: "John Doe",
          email: "johndoe@example.com",
          roles: ["admin", "editor"]
        },
        user2: {
            id: 1,
            name: "John Doe",
            email: "johndoe@example.com",
            roles: ["admin", "editor"]
          },
      }
    test('Write data into json file', async({page})=>{
         fs.writeFileSync('Data/Write.json',JSON.stringify(data))//Converts a JavaScript value to a JavaScript Object Notation (JSON) string.



    })
})
