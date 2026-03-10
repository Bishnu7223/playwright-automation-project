const { test, expect } = require('@playwright/test');
export class rahulshettyacademy {
    constructor(page) {
        this.page = page;
    }
    async register(URL, title, firstName, lastName, email, mobile, occupation, gender, password, confirmPassword) {
        await this.page.goto(URL);
        await expect(this.page).toHaveTitle(title);
        await this.page.locator('//a[text()="Register here"]').click();
        await this.page.locator('#firstName').fill(firstName);
        await this.page.locator('#lastName').fill(lastName);
        await this.page.locator('#userEmail').fill(email);
        await this.page.locator('#userMobile').fill(mobile);
        await this.page.locator('//select[@formcontrolname="occupation"]').selectOption(occupation);
        await this.page.locator('//input[@value="' + gender + '"]').check();
        await this.page.locator('//input[@id="userPassword"]').fill(password);
        await this.page.locator('#confirmPassword').fill(confirmPassword);
        await this.page.locator('//input[@type="checkbox"]').check();
        await this.page.locator('#login').click();
    }
    async login(URL, title, email, password) {
        await this.page.goto(URL);
        await expect(this.page).toHaveTitle(title);
        await this.page.locator('#userEmail').fill(email);
        await this.page.locator('#userPassword').fill(password);
        await this.page.locator('#login').click();
    }

    async addToCart(product) {
        await this.page.locator('//*[text()=" Add To Cart"]').first().waitFor();
        if(product == "All") {
            const items=await this.page.locator('//*[text()=" Add To Cart"]').count();
            console.log(items);
            for(let i=0; i<items; i++) {
                await this.page.locator('//*[text()=" Add To Cart"]').nth(i).click();
            }
        }else {
            await this.page.locator('//*[text()=" Add To Cart"]').nth(product-1).click();
        }
    }
}