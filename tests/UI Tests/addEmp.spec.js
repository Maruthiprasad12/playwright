import { test, expect } from '@playwright/test';
import logindata from "../../testdata/login.json"
import empdata from "../../testdata/addemp.json"


test('add employee', async ({page}) => {
   await page.goto("/web/index.php/auth/login")
   await page.locator('input[placeholder="Username"]').fill(logindata.username)
   await page.locator('input[name="password"]').fill(logindata.password)
   await page.locator('//button[@type="submit"]').click()
   await page.locator('//span[text()="PIM"]').click()
   await page.getByText('Add Employee').click()
   await page.getByPlaceholder('First Name').fill(empdata.firstname)
   await page.getByPlaceholder('Last Name').fill(empdata.lastname)
   await page.locator('//p[text()="Create Login Details"]/../../div/div/div/div/div/input').fill("1213434")
   await page.locator('//button[@type="submit"]').click()
   // expect (page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/320")
})