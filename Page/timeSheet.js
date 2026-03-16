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
        await this.page.pause();
        await this.page.getByRole('button', { name: 'Confirm' }).click();
    }

    async addTimeSheet(date) {
        await this.page.locator('p:has-text("Apply Timesheet")').click();
        for (const day of date) {
            await this.fillTimeSheet(day);
        }
    }
    async fillTimeSheet(date) {
        await this.page.locator('#forSelf').check();
        await this.page.locator('#dayTypeCursor').selectOption("Working");
        await this.page.getByRole('button', { name: 'Open calendar' }).click();
        await this.page.getByRole('button', { name: date }).click();
        await this.page.getByPlaceholder('Select Project').click()
        await this.page.getByText('CO-FT-AT-TNM-AXISBANK-BSG-TCoE').click();
        await this.page.locator('select').nth(1).selectOption("Filled");
        await this.uploadFile()
        await this.page.locator('(((//*[text()="In Time"])[1]//following-sibling::div//mat-form-field)[1]//div)').first().click();
        await this.page.getByRole('option', { name: '09' }).click();
        await this.page.locator('(((//*[text()="In Time"])[1]//following-sibling::div//mat-form-field)[2]//div)').first().click();
        await this.page.getByRole('option', { name: '00' }).click();
        await this.page.locator('(((//*[text()="In Time"])[1]//following-sibling::div//mat-form-field)[3]//div)').first().click();
        await this.page.getByText('AM', { exact: true }).click();
        await this.page.locator('(((//*[text()="Out Time"])[1]//following-sibling::div//mat-form-field)[1]//div)').first().click();
        await this.page.getByRole('option', { name: '07' }).click();
        await this.page.locator('(((//*[text()="Out Time"])[1]//following-sibling::div//mat-form-field)[2]//div)').first().click();
        await this.page.getByRole('option', { name: '00' }).click();
        await this.page.locator('(((//*[text()="Out Time"])[1]//following-sibling::div//mat-form-field)[3]//div)').first().click();
        await this.page.getByText('PM', { exact: true }).click();
        await this.page.getByRole('checkbox', { name: 'Same as ApMoSys In-time and' }).check();
        await this.page.getByText('Select Client', { exact: true }).click();
        await this.page.getByRole('option', { name: 'AXIS BANK' }).click();
        await this.page.getByText('Select Client Location').click();
        await this.page.getByText('Airoli').click();
        await this.page.getByText('Select Team').click();
        await this.page.getByText('CO-FT-AT-TNM-AXISBANK-BSG-TCoE | AT-AXISBANK-BSG-TCoE').click();
        await this.page.locator('#dayTypeCursor').nth(1).selectOption('44157');
        await this.page.getByRole('spinbutton').click();
        await this.page.getByRole('spinbutton').fill('10');
        await this.page.getByRole('button', { name: 'Create Timesheet' }).click();
    }
    async uploadFile() {
        await this.page.locator("//input[@type='file']").setInputFiles(".Files/attend.jpeg");
    }
}