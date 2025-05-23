import{test, expect} from '@playwright/test';


test('Locators' , async({page})=>
{

    // property
    // css
    // xpath

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

   await page.locator("//input[@placeholder='Username']").fill("Admin");
   await  page.locator("//input[@placeholder='Password']").fill("admin123");

   await page.click("//button[@type='submit']");

   const url= page.url();
   await expect(page).toHaveURL(url)

   const dash = page.locator("//img[@alt='client brand banner']");

    await expect(dash).toBeVisible();


   page.close();

})