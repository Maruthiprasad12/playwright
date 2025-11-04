import { test, expect } from "@playwright/test"
test.describe('iframes', async () => {
    test('Iframe exapmples', async ({ page }) => {
        await page.goto('https://ui.vision/demo/webtest/frames/')
        await page.frameLocator('//frame[@src="frame_2.html"]').locator('//input[@name="mytext2"]').fill("Maruthi")
        await page.frameLocator('frame[src="frame_3.html"]').frameLocator('iframe[src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]').locator('div[class="AB7Lab Id5V1"]').first().check()

    })

    test('Iframe examples', async ({ page }) => {
        await page.goto('https://ui.vision/demo/webtest/frames/')
        const frame = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });
        const childlocator = await frame.childFrames()
        console.log(childlocator.length)
        await childlocator[0].locator('#i21').click()
        await page.close()


    })

test('Click Yes inside nested iframe (JS)', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/')
  const outerFrame = await page.frame({ url: /frame_3.html/ })
  expect(outerFrame).not.toBeNull()
  const nestedFrames = outerFrame.childFrames()
  expect(nestedFrames.length).toBeGreaterThan(0)
  const innerFrame = nestedFrames[0]
  const yesButton = innerFrame.locator('//span[text()="Yes"]')
  await yesButton.waitFor({ state: 'visible' })
  await yesButton.click({force : true })
})
    test('Iframe examples2', async ({ page }) => {
        await page.goto('                                                                                                                                                   ')
        const frame = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });
        // const childlocator = await frame.childFrames()
        // console.log(childlocator.length)
        // await childlocator[0].locator('//span[text()="Yes"]').click({force : true}) 
        
// div[class="uHMk6b fsHoPb"]
    })

})
