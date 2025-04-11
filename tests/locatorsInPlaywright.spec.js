import{test, expect} from '@playwright/test';


test('Locators' , async({page})=>
{

    // property
    // css
    // xpath

    await page.goto("https://hrm.neotechacademy.com/auth/seamlessLogin");

   await page.locator("//input[@id='txtUsername']").fill("Admin");
   await  page.locator("//input[@id='txtPassword']").fill("Neotech@123");

   await page.click("//button[@type='submit']");

   const url= page.url();
   await expect(page).toHaveURL(url)

   const dash=page.locator("//img[@class='circle account-photo']");

    await expect(dash).toBeVisible();


   page.close();

})