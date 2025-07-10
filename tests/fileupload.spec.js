import { test, expect } from '@playwright/test'

test('working with fileUpolad & download', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload')
    await page.locator('#file-upload').setInputFiles('testdata/images/adorable-anima.jpg')
    await page.locator('#file-submit').click()
    await expect(page.locator('#uploaded-files')).toHaveText('adorable-anima.jpg')
    await expect(page.locator('div[class="example"]>h3')).toBeVisible('File Uploaded!')
})