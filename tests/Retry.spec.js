import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { DashBoardPage } from '../Pages/DashBoardPage';

test('PomTest', async ({ page }) => {
    // Login
    const login = new LoginPage(page);
    await login.navigateToLoginPage();
    await login.login("Admin", "Neotech@123");

    // Wait for the dashboard to load
    await page.waitForTimeout(2000);

    // Home Page
    const dash = new DashBoardPage(page);
    await dash.clickPimButton();
    await dash.clickEmployeeListButton();
    await dash.verifyEmployeeTable();

    const frame= await page.locator("//div[@id='ohrm-small-logo']//div");
    const status=frame.isVisible();
    await  expect(status).toBeTruthy(); // Verify the field is visible
    

    await page.waitForTimeout(2000); // wait for 2 seconds to see the dashboard
});