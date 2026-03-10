const { test, expect } = require('@playwright/test');
const { timeSheet } = require('../Page/timeSheet');
test('Ishine portal', async ({ page }) => {
    const timesheet = new timeSheet(page);
    await timesheet.login('https://ishine.apmosys.com/#/login', "iShine Portal", "bishnuprasad.beura@apmosys.com", "Ishine@7223");
    await timesheet.addTimeSheet();
})
 