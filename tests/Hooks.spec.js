import{test,expect} from '@playwright/test';


test('Hooks ', async({ page })=>{

// login 
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await page.fill("//input[@placeholder='Username']", "Admin");
  await page.fill("//input[@name='password']", "admin123");
  await page.click("//button[@type='submit']");


//Home Page
  const dash=page.locator("//img[@alt='client brand banner']");
  await expect(dash).toBeVisible(); // Verify the field is visible


  page.waitForTimeout(2000); // wait for 2 seconds to see the dashboard


// Logout
    await page.click("//p[@class='oxd-userdropdown-name']"); // click on the logo
    await page.waitForTimeout(2000); // wait for 2 seconds to see the logo
    await page.click("//a[normalize-space()='Logout']"); // click on the logout button
    await page.waitForTimeout(2000); // wait for 2 seconds to see the logout button


})


test('Hooks with', async({ page })=>{

    // login 
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
      await page.fill("//input[@placeholder='Username']", "Admin");
      await page.fill("//input[@name='password']", "admin123");
      await page.click("//button[@type='submit']");
    
      
    //Home Page
      const dash=page.locator("//a[normalize-space()='']");
      await expect(dash).toBeVisible(); // Verify the field is visible
      dash.click();
      const table=await page.locator("//div[@class='oxd-table-filter']");
      await expect(table).toBeVisible(); // Verify the field is visible
      page.waitForTimeout(2000); // wait for 2 seconds to see the dashboard
    
    
    // Logout
        await page.click("//p[@class='oxd-userdropdown-name']"); // click on the logo
        await page.waitForTimeout(2000); // wait for 2 seconds to see the logo
        await page.click("//a[normalize-space()='Logout']"); // click on the logout button
        await page.waitForTimeout(2000); // wait for 2 seconds to see the logout button
    
    
    })