import {test, expect} from "@playwright/test"
 
test('wwe - on scrolling eelement',async ({page})=>{
    await page.goto('https://www.imdb.com/chart/top/')
    await page.locator('//ul[@role="presentation"]/li[13]').scrollIntoViewIfNeeded()
    await page.locator('//ul[@role="presentation"]/li[13]').click()
})