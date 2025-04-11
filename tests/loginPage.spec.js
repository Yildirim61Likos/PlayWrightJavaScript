const {test, expect} = require ('@playwright/test');

test('login page', async ({page})=> 
{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

     const pageTitle = await page.title();

     console.log("Page title is " + pageTitle);

     const pageUrl= await page.url();
     console.log("Page url is "+ pageUrl);

     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
     await expect(page).toHaveTitle('OrangeHRM');
     await page.close();





})




