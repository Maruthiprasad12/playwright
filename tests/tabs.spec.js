import { test, expect } from '@playwright/test';
test.describe('working on web elements in DOM', async () => {
    test('working with tabs elements', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/windows')
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            page.click('.example>a')
        ]);

        await expect(newTab).toHaveURL('https://the-internet.herokuapp.com/windows/new')
        const textvalue = await newTab.locator('.example>h3').textContent()
        console.log("Text on new page", textvalue)
        await expect(await newTab.title()).toBe('New Window')
        // await page.waitForEvent(6000)
    })

    test('workig with tabs in Amazon', async ({ page }) => {
        await page.goto('https://www.flipkart.com/')
        await page.getByPlaceholder('Search for products, brands and more').fill("Mobiles")
        await page.getByPlaceholder('Search for products, brands and more').press('Enter')
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await page.click("//div[text()='CMF by Nothing Phone 2 Pro (Light Green, 128 GB)']")
        ]);
        await expect(newTab).toHaveURL(/cmf-nothing-phone-2-pro-light-green-128-gb/)
    })

})