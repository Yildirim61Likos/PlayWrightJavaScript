import { test, expect } from '../hooks/global-hooks';
import config from '../playwright.config.js';

test('LoginTest', async ({ loginPage, dashboardPage }) => {
    
  
  // Get username and password from the config
    const username = config.use.username;
    const password = config.use.password;

       // Access the username input directly
       await loginPage.locators.usernameInput.fill(username);

       // Access the password input directly
       await loginPage.locators.passwordInput.fill(password);
   
       // Access the login button directly
       await loginPage.locators.loginButton.click();
   
       // Optionally, you can still use the `login` method for the full login flow
       // await loginPage.login("Admin", "Neotech@123");
    // Wait for 3 seconds to see the dashboard
    await dashboardPage.page.waitForTimeout(3000);

    // Wait for the dashboard to load
    await dashboardPage.clickPimButton();
    await dashboardPage.clickEmployeeListButton();
    await dashboardPage.verifyEmployeeTable();

    // Wait for another 3 seconds
    await dashboardPage.page.waitForTimeout(3000);
});