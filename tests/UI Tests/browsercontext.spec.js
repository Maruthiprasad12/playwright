const { chromium, firefox, webkit } = require('playwright');
import {test, expect} from "@playwright/test"

test("run text in multiple browser",async () => {
  const browsers = [chromium, firefox, webkit];

  for (const browserType of browsers) {
    const browser = await browserType.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("input[placeholder='Username']").fill('Admin')
    await page.locator("input[placeholder='Password']").fill('admin123');
    await page.click("button[type='submit']");
    await page.waitForURL('**/dashboard/**');
    console.log(`Login successful in ${browserType.name()}:`, page.url());
    await browser.close();
  }
})
