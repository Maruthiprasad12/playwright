import { test, expect } from "@playwright/test"
import fs from "fs"
test.describe("working with download file", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/download')
    })
    test('Single file download', async ({ page }) => {

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator("//a[text()='sample_media_file.png']").click()
        ])
        const suggestedFilename = download.suggestedFilename()
        const filepath = 'download/' + suggestedFilename
        await download.saveAs(filepath)
        expect(fs.existsSync(filepath)).toBeTruthy()
    })

    test('download multiple files', async ({ page }) => {
        const fileNames = ['temp_upload.txt', 'icon1.png', 'anjali.kumbar.bmp']

        for (const fileName of fileNames) {
            const [download] = await Promise.all([
                page.waitForEvent('download'),
                page.locator(`text=${fileName}`).click()
            ])
            const suggestedFilename = download.suggestedFilename()
            const filepath = 'download/' + suggestedFilename
            await download.saveAs(filepath)
            expect(fs.existsSync(filepath)).toBeTruthy()
        }
    })
})