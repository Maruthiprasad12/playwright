import{test , expect} from "@playwright/test"

test('working with table web element',async ({page})=>{
    await  page.goto("https://the-internet.herokuapp.com/tables")
    await expect(page.locator('table[id="table1"]>thead>tr>th')).toHaveCount(6)
})