import { BasePage } from '../support/BasePage';

class LoginPage extends BasePage {
    constructor(page) {
        super(page); // Call the parent class constructor
        this.page = page; // Assign the page object
        this.locators = {
            usernameInput: this.page.locator("//input[@id='txtUsername']"),
            passwordInput: this.page.locator("//input[@id='txtPassword']"),
            loginButton: this.page.locator("//button[@type='submit']"),
        };
    }

    async login(username, password) {
        console.log("Logging in...");
        await this.locators.usernameInput.fill(username);
        await this.locators.passwordInput.fill(password);
        await this.locators.loginButton.click();
    }
}

export { LoginPage };
  

 