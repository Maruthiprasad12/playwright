import{ test, expect } from '@playwright/test';

test('working with Shodow DOM',async ({page})=>{
    await page.goto('https://books-pwakit.appspot.com/')
    await page.locator("#input").fill('scince')
    await page.keyboard.press('Enter')
})