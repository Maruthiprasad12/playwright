import { test, expect } from '@playwright/test'

test.describe("working with Alerts-popups", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    });

    test("working with simple alert", async ({ page }) => {
        page.on("dialog", async dialog => {
            expect(dialog.message()).toBe('I am a JS Alert');
            await dialog.accept();
        });

        await page.locator('//div[@class="example"]/ul/li/button[text()="Click for JS Alert"]').click();
        await page.waitForTimeout(1000);
    });
});
