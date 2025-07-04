    const { expect } = require("@playwright/test");

exports.loginPage = class loginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = 'input[placeholder="Username"]';
        this.passwordInput = 'input[name="password"]';
        this.hitButton = '//button[@type="submit"]';
        this.assertURL = '/web/index.php/dashboard/index'
        this.errormsg = '//p[text()="Invalid credentials"]';
    }

    async goto() {
        await this.page.goto('/web/index.php/auth/login');
    }
    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.hitButton);
    }
    async loginsuccess(){
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }
}
