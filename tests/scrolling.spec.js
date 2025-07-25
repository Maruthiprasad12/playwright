import {test, expect} from "@playwright/test"
 import { chromium, firefox, webkit } from 'playwright';
test('wwe - on scrolling eelement',async ({page})=>{
    for (const browserType of [chromium, firefox, webkit]) {
          const browser = await browserType.launch()
          const context = await browser.newContext()
          const page = await context.newPage()
    await page.goto('https://www.imdb.com/chart/top/')
    await page.locator('//div[@id="ipc-wrap-background-id"]//following::h3[text()="60. Avengers: Infinity War"]').scrollIntoViewIfNeeded()
    await page.locator('//div[@id="ipc-wrap-background-id"]//following::h3[text()="60. Avengers: Infinity War"]').click()
    }
})