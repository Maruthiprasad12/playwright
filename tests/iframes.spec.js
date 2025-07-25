import { test, expect } from '@playwright/test';
import { chromium, firefox, webkit } from 'playwright';

test('working with Iframes', async () => {
 for (const browserType of [chromium, firefox, webkit]) {
      const browser = await browserType.launch()
      const context = await browser.newContext()
      const page = await context.newPage()
      // Navigate to the page
  await page.goto('https://jqueryui.com/checkboxradio/');

  // Locate the iframe and interact with the element inside
  const frame = page.frameLocator('.demo-frame');

  // Assert the radio button exists before clicking (optional but recommended)
  const radioButton = frame.locator('#radio-3');
  await expect(radioButton).toBeVisible({ timeout: 5000 });

  // Check the radio button
  await radioButton.check();

  // Cleanup
  await browser.close();}
});
