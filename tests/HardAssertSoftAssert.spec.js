const { test, expect } = require('@playwright/test');

test('Soft Assert', async ({ page }) => 
{


    // Soft Assert will not terminate the test execution even if the assertion fails. 
    // It will continue executing the rest of the test steps.
    // Soft Assert is useful when you want to collect multiple failures in a single test run.
    // It allows you to report all failures at once, rather than stopping at the first failure.
    // Soft Assert is typically used in scenarios where you want to gather as much information as possible about the test execution.

await page.goto("https://demoblaze.com/");

await expect.soft(page).toHaveURL('https://demoblaze.com/'); // Soft Assert: Page has a spec
await expect.soft(page).toHaveTitle('STORE123123'); // Soft Assert: Page has a specific title
await expect.soft(page.locator("//a[@id='nava']")).toBeVisible(); // Soft Assert: Element is visible


await expect(page).toHaveURL('https://demoblaze.com/'); // Hard Assert: Page has a spec
await expect(page).toHaveTitle('STORE123123'); // Hard Assert: Page has a specific title
await expect(page.locator("//a[@id='nava']")).toBeVisible(); // Hard Assert: Element is visible
//hard assert will terminate the test execution if the assertion fails.
// It will not continue executing the rest of the test steps.
// Hard Assert is useful when you want to ensure that a specific condition is met before proceeding with the test execution.
// It is typically used in scenarios where the test cannot proceed if a certain condition is not met.



});