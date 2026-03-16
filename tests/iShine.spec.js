const { test, expect } = require('@playwright/test');
const { timeSheet } = require('../Page/timeSheet');
test('Ishine portal', async ({ page }) => {
    const timesheet = new timeSheet(page);
    await timesheet.login('https://ishine.apmosys.com/#/login', "iShine Portal", "bishnuprasad.beura@apmosys.com", "Ishine@7223");
    const date=["March 2, 2026","March 3, 2026","March 5, 2026","March 6, 2026","March 7, 2026","March 9, 2026","March 10, 2026","March 11, 2026","March 12, 2026","March 13, 2026"]
    await timesheet.addTimeSheet(date);
})
 