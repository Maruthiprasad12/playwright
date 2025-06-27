const { expect } = require("@playwright/test");
exports.PimMenu=class PimMenu{
    constructor(page){
        this.page = page
        this.Pim = '//span[text()="PIM"]'
        this.addEmp = 'Add Employee'
        this.report = 'Reports'
        this.list = 'Employee List'
        this.cofig = '//span[text()="Configuration "]'
        this.Pimmenu = 'role="navigation"'
    }
    async clickPIM(){
        await this.page.click(this.Pim);
        await expect(this.page).toBeVisible(this.Pimmenu())
    }
    async 
}