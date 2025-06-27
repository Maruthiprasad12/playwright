import { test, expect } from '@playwright/test';
import logindata from "../testdata/login.json"

// test('working with checkboxes',async({page})=>{
//     await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
//     await page.locator('input[type="checkbox"]').check()
//     const ischecked = await page.locator('input[type="checkbox"]').isChecked()
//     console.log(ischecked)
//     await expect( page.locator('input[type="checkbox"]')).toBeChecked()
//     await page.locator('input[type="checkbox"]').uncheck()
//     await expect( page.locator('input[type="checkbox"]')).not.toBeChecked()
// })


// multiple check boxes
test(" checking Multiple check boxes",async ({page})=>{
    page.goto('/web/index.php/auth/login')
    await page.locator('input[placeholder="Username"]').fill(logindata.username)
    await page.locator('input[name="password"]').fill(logindata.password)
    await page.locator('//button[@type="submit"]').click()
    await page.locator('//span[text()="PIM"]').click()
    const Arr =['input[value="0"]','input[value="3"]','input[value="6"]']
    for (let checkbox of Arr){
       const isChecked = await page.locator(checkbox).isChecked()
        if (!isChecked){
            await page.locator(checkbox).check({force : true})
        }
    }
})