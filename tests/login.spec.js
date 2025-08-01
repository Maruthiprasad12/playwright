import{ test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginpage';
import { logindata } from '../testdata/login.json'


test('login with valid creds',async({page})=>{
    const login = new loginPage(page)
    await login.goto('/web/index.php/auth/login')
    await login.login("Admin", "admin123")
    await login.loginsuccess()   
})