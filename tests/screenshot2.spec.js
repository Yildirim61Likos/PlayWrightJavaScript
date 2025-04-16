import{test,expect} from '@playwright/test';


test('Page Screenshot', async({ page })=>{
    
        await page.goto("https://hrm.neotechacademy.com/");

        await page.fill("//input[@id='txtUsername']", "Admin");
        await page.fill("//input[@id='txtPassword']", "Neotech@123");
        await page.click("//button[@type='submit']");


        await  expect(await page.locator("//div[@id='ohrm-small-logo']//div")).toBeVisible(); // Verify the field is visible


        await page.waitForTimeout(2000); // wait for 2 seconds to see the dashboard

        // no code need for screen shot !!! 
        // just adjust the config file to take the screen shot automatically


})


