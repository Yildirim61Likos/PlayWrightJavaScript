import { test as baseTest } from '@playwright/test';
import { BasePage } from '../support/BasePage';
import { LoginPage } from '../Pages/LoginPage';
import { DashBoardPage } from '../Pages/DashBoardPage';

let basePage; // Declare the BasePage instance globally

// Extend the base test object
export const test = baseTest.extend({
    page: async ({}, use) => {
        await use(basePage.page); // Provide the page to the test
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page); // Initialize LoginPage
        await use(loginPage); // Provide it to the test
    },
    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashBoardPage(page); // Initialize DashBoardPage
        await use(dashboardPage); // Provide it to the test
    },
});

// Global hooks
test.beforeAll(async ({ browserName, headless, baseURL }) => {
    console.log("Running beforeAll...");
    basePage = new BasePage(); // Initialize BasePage
    await basePage.setup(browserName, headless, baseURL); // Call the setup method
    
});

test.afterAll(async () => {
    console.log("Running afterAll...");
    await basePage.teardown(); // Call the teardown method
});

// Export `expect` for assertions
export const expect = test.expect;