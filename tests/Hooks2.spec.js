import{test,expect} from '@playwright/test';


let page; // declare the page variable outside the test function


test.beforeAll(async({browser}) =>
{

  // login 
  page = await browser.newPage(); // create a new browser context


await page.goto("https://hrm.neotechacademy.com/");

await page.fill("//input[@id='txtUsername']", "Admin");
await page.fill("//input[@id='txtPassword']", "Neotech@123");
await page.click("//button[@type='submit']");

});

test.afterAll(async() =>{

// log out

// Logout
await page.click("//i[normalize-space()='keyboard_arrow_down']"); // click on the logo
 // wait for 2 seconds to see the logo
await page.click("//a[@id='logoutLink']"); // click on the logout button
 // wait for 2 seconds to see the logout button

})




test('Home page test ', async()=>{

//Home Page
  const dash=page.locator("//div[@id='ohrm-small-logo']//div");
  await expect(dash).toBeVisible(); // Verify the field is visible
  await page.waitForTimeout(2000); // wait for 2 seconds to see the dashboard

})


test(' Pim test', async()=>{

  
    //Home Page
      const dash= await page.locator("//span[normalize-space()='PIM']");
      await expect(dash).toBeVisible(); // Verify the field is visible
      await dash.click();
      const table=await page.locator("//span[normalize-space()='Employee List']");
      await expect(table).toBeVisible(); // Verify the field is visible
      await  page.waitForTimeout(2000); // wait for 2 seconds to see the dashboard
    
    
   
    })