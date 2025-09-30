import { test, expect } from '@playwright/test';
test.describe("working with text element", async () => {
    // //    test.beforeEach(async ({ page }) => {
    //         await page.goto("https://www.amazon.in/")
    //     })
    test('working with texts', async ({ page }) => {
        await page.goto("https://www.amazon.in/")
        await expect(page.locator('(//a[@class="nav-a  "])[6]')).toHaveText('Mobiles')
        const textvalue = await page.locator('(//a[@class="nav-a  "])[9]').textContent()
        console.log(textvalue)

    })
    test('workig with all text content', async ({ page }) => {
        await page.goto('https://www.flipkart.com/')
        // const values = await page.locator('//a[@class="_1ch8e_"]/div/div/span/span').allTextContents()
        // for (let i of values) {
        //     console.log(i)
        // }
        const textvalue = await page.locator('(//a[@class="_1ch8e_"]/div/div/span/span)[3]').innerText()
        console.log(textvalue)
        const values = await page.locator('//a[@class="_1ch8e_"]/div/div/span/span').allInnerTexts()
        for (let i of values) {
            console.log(i)
        }

    })
})
