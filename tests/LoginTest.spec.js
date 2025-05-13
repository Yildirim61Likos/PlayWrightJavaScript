import { test, expect } from '../hooks/global-hooks';
import config from '../playwright.config.js';
import { CommonMethods } from '../support/CommonMethods'; // Ensure the path is correct
test('LoginTest@smoke', async ({ loginPage, dashboardPage }) => {
    
  
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
    await dashboardPage.page.waitForTimeout(2000);
    await dashboardPage.logout();
    await dashboardPage.page.waitForTimeout(2000);
});

// this is for sample !!!
test('Login with valid credentials@smoke', async ({ loginPage, dashboardPage }) => {
  await CommonMethods.loginWithValidCredentials(loginPage); // Call the static method directly

  await dashboardPage.page.waitForTimeout(2000);

  await dashboardPage.logout();
  await dashboardPage.page.waitForTimeout(2000);
});


