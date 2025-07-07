import { test, expect } from "@playwright/test"
const { chromium } = require('playwright');

test('working on links ', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://trello.com/')
    await page.click('(//a[text()="Log in"])[1]')
    await page.locator("#username-uid1").fill('pcmaruthiprasad@gmail.com')
})