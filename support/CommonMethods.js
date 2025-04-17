// Importing necessary modules
import config from '../playwright.config.js'; // Ensure this is the correct path

export class CommonMethods {
    /**
     * Logs in with valid credentials using the username and password from the config.
     * Assumes `loginPage` is globally provided by global-hooks.js.
     */
    static async loginWithValidCredentials(loginPage) {
        console.log("Logging in with valid credentials...");
        await loginPage.locators.usernameInput.fill(config.use.username); // Fill the username
        await loginPage.locators.passwordInput.fill(config.use.password); // Fill the password
        await loginPage.locators.loginButton.click(); // Click the login button
    }
}