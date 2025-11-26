import {test, expect} from "@playwright/test"
test('wwe - on scrolling eelement',async ({page})=>{
await page.goto('https://playwright.dev/')
await page.click('.DocSearch-Search-Icon')
await page.fill('.DocSearch-Input', 'test Automation')
const options = page.locator('.DocSearch-Hit');
await options.first().waitFor()
const count = await options.count()
const limit = Math.min(3,count)
console.log(count)
for(let i= 0;i<limit;i++){
    const text = await options.nth(i).innerText()
    console.log(`option${i+1}:${text}\n`)
}
})