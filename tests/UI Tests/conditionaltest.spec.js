import {test, expect} from "@playwright/test"
import { link } from "fs"
test ("working with conditional testing",async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/disappearing_elements')
    const  ContactUs = page.getByRole('link',{name :'Contact Us'})
    const Portfolio = page.getByRole('link',{name :'Portfolio'})
    const gallery = page.getByRole('link',{name :'Gallery'})

    if (await gallery.isVisible()){
        await gallery.click()
        console.log("clicked on gallery")
    } 
    else if (await Portfolio.isVisible()){
        await Portfolio.click()
        console.log("clicked on portfolio")
    }
    
    await expect(page).toHaveURL(/.*gallery|.*portfolio/)
})