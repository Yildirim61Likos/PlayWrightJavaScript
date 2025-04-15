import {test , expect} from '@playwright/test';

test('Built in locators', async({ page })=>{

    // page.getByAltText()
    // page.getByPlaceholder();
    // page.getRole();
    // page.getByText();
    // page.getByLabel();
    // page.getByTitle();
    // page.getByTestId();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // getByAltText();
    const logo = await page.getByAltText("company-branding");

    await expect(logo).toBeVisible;

    // getByPlaceHolder
    const userName = await page.getByPlaceholder("Username");

    expect(userName).toBeVisible;

    await userName.fill("Admin");

     const password = await  page.getByPlaceholder("Password");

    await  password.fill("admin123");

    // getByRole  !!!
    await  page.getByRole('button',{ type: 'submit'}).click();

   const dashBoard = await  page.locator("//img[@alt='client brand banner']");
   

    await expect(dashBoard).toBeVisible();

    
   const dash = await page.locator("//div[@class='oxd-topbar-header-title']").textContent();
    console.log(dash);

   //await expect(await page.getByText(dash)).toBeVisible();




})