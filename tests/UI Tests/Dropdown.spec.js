import { test, expect } from '@playwright/test';
test ('working with dropdown', async ({page})=>{
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
    // selecting with  index
    await page.locator('select[name^="DOB_Day"]').selectOption({index : 0 })
    // selecting with  value
    await page.locator("#country").selectOption('99')
    // selecting with  text
    await page.locator('select[name^="city"]').selectOption("Ahmedabad")

})