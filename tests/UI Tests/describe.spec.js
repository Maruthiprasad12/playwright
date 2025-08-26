import { test, expect } from '@playwright/test';
import { asyncWrapProviders } from 'async_hooks';

test.describe('Automation - working with elements',async()=>{
    test ('working with dropdown', async ({page})=>{
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
    // selecting with  index
    await page.locator('select[name^="DOB_Day"]').selectOption({index : 0 })
    // selecting with  value
    await page.locator("#country").selectOption('99')
    // selecting with  text
    await page.locator('select[name^="city"]').selectOption("Ahmedabad")

})
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
})