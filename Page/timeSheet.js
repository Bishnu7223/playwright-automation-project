const { test, expect } = require('@playwright/test');
export class timeSheet {
    constructor(page) {
        this.page = page;
    }

    async login(URL, title, email, password) {
        await this.page.goto(URL);
        await expect(this.page).toHaveTitle(title);
        await this.page.locator('#username').fill(email);
        await this.page.locator('#userPassword').fill(password);
        await this.page.getByRole('button', { name: 'LOG IN' }).click();
        await this.pause();
        await this.page.getByRole('button', { name: 'Confirm' }).click();
    }

    async addTimeSheet() {
        await this.page.locator('p:has-text("Apply Timesheet")').click();
        await this.fillTimeSheet()
    }
    async fillTimeSheet() {
        await this.page.locator('#forSelf').check();
        await this.page.locator('#dayTypeCursor').selectOption("Working");
        await this.page.getByRole('button', { name: 'Open calendar' }).click();
        await this.page.getByRole('button', { name: 'March 2, 2026' }).click();
        await this.page.getByPlaceholder('Select Project').getByRole('button', { name: 'Open calendar' }).click();
        await this.page.pause();
    }
}