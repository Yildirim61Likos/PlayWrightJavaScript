import{test,expect} from '@playwright/test';


test('Tracing', async({ page })=>{


    // Start tracing before creating any pages.

    await page.goto("https://hrm.neotechacademy.com/");

    await page.fill("//input[@id='txtUsername']", "Admin");
    await page.fill("//input[@id='txtPassword']", "Neotech@123");
    await page.click("//button[@type='submit']");


    //Home Page
      const dash=page.locator("//div[@id='ohrm-small-logo']//div");
      await expect(dash).toBeVisible(); // Verify the field is visible
      await page.waitForTimeout(2000); // wait for 2 seconds to see the dashboard
    


})