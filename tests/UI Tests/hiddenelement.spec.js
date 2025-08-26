import { test, expect } from '@playwright/test';


test('clicks on hidden element',async({page})=>{
    await page.goto('https://playwright.dev/python/')
    await page.locator('https://playwright.dev/python/').click({force : true})
})