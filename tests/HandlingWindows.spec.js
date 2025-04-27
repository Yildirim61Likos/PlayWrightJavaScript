import{test,expect , chromium } from '@playwright/test';

test('Pages/Windows', async ({page}) => {


    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page1 = await context.newPage();


    await page.goto('https://hrm.neotechacademy.com/');
    //verify title of the page
    const title = await page.title();
    console.log(title); // The Internet 

    await page.waitForTimeout(5000); // wait for 2 seconds to see the dashboard
   
    const allPages=context.pages();
    console.log(allPages.length); // 2 pages are opened

    await page1.goto('https://hrm.neotechacademy.com/');
    //verify title of the page
   const title1 = await page1.title();
   console.log(title1); // The Internet

   // handling new tabs
    
   const pagePromise  =   context.waitForEvent('page');
   await page1.click("//a[normalize-space()='OrangeHRM, Inc']");
   // verify the elemenmt is visible
   const newPage = await pagePromise;
   const logo = await newPage.locator("//img[@alt='OrangeHRM Logo']").first();
   await expect(logo).toBeVisible(); // Verify the field is visible


})