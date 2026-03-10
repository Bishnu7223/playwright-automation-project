const { test, expect } = require('@playwright/test');
const { rahulshettyacademy } = require('../Page/rahulshettyacademy');
test('rahulshettyacademy', async ({ page }) => {
    const rahulshetty = new rahulshettyacademy(page);
    await rahulshetty.register('https://rahulshettyacademy.com/client', "Let's Shop", "sanata", "Beura", "Hdfc@gmail.com", "8264721861", "Engineer", "Male", "Beura@123", "Beura@123");
    await rahulshetty.login('https://rahulshettyacademy.com/client', "Let's Shop", "Hdfc@gmail.com", "Beura@123");
    await rahulshetty.addToCart("All");
})
 