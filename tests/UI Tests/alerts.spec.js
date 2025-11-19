import { test, expect } from '@playwright/test'

test.describe("working with Alerts-popups", async () => {

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
        await page.close()
    });
    test("working with confirm alert", async ({ page }) => {
        page.on("dialog", async (dialog) => {
            expect(dialog.type()).toBe("confirm");
            expect(dialog.message()).toBe("I am a JS Confirm");
            await dialog.accept();
        });
        await page.getByText("Click for JS Confirm").click();
        await page.close()
    });
    test("working with cancell-confirm alert", async ({ page }) => {
        page.on("dialog", async (dialog) => {
            expect(dialog.type()).toBe("confirm");
            expect(dialog.message()).toBe("I am a JS Confirm");
            await dialog.dismiss();
        });
        await page.getByText("Click for JS Confirm").click();
        await page.close()
    });
    test("working with accept-prompt alert", async ({ page }) => {
        page.on("dialog", async (dialog) => {
            expect(dialog.type()).toBe("prompt");
            expect(dialog.message()).toBe("I am a JS prompt");
            await dialog.accept("Maruthi");
        });
        await page.locator('button[onclick="jsPrompt()"]').click();
        await page.close()
    });
    test("working with cancel   -prompt alert", async ({ page }) => {
        page.on("dialog", async (dialog) => {
            expect(dialog.type()).toBe("prompt");
            expect(dialog.message()).toBe("I am a JS prompt");
            await dialog.dismiss();
        });
        await page.locator('button[onclick="jsPrompt()"]').click();
        await page.close()
    });

});
