import { BasePage } from '../support/BasePage';
import { expect } from '@playwright/test';

export class DashBoardPage extends BasePage {
    constructor(page) {
        super(page); // Call the parent class constructor
        this.page = page; // Assign the page object
        this.locators = {
            pimButton: "//span[normalize-space()='PIM']",
            employeeListButton: "//span[normalize-space()='Employee List']",
            employeeTable: "//li[@class='page-title']",
        };
    }

    async clickPimButton() {
        console.log("Clicking the PIM button...");
        await this.page.locator(this.locators.pimButton).click();
    }

    async clickEmployeeListButton() {
        console.log("Clicking the Employee List button...");
        await this.page.locator(this.locators.employeeListButton).click();
    }

    async verifyEmployeeTable() {
        console.log("Verifying the Employee Table is visible...");
        const employeeTable = this.page.locator(this.locators.employeeTable);
        await expect(employeeTable).toBeVisible();
    }
}