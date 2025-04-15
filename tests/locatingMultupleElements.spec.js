import { test, expect } from '@playwright/test';

test('multiple locators', async ({ page }) => 
{
  test.slow(); // Optional: allow more time

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await page.fill("//input[@placeholder='Username']", "Admin");
  await page.fill("//input[@name='password']", "admin123");
  await page.click("//button[@type='submit']");


  page.waitForSelector("//ul[@class='oxd-main-menu']//li");


  // if you wanna use index loop then you should use locator to locate multple elements !!!

  const linkTabs = page.locator("//ul[@class='oxd-main-menu']//li");

  // ✅ Wait until the first menu item is visible

  await linkTabs.first().waitFor();

  const count = await linkTabs.count();

  // ✅ Print all tab texts

  for (let i = 0; i < count; i++) 
{
    const text = await linkTabs.nth(i).textContent();
    console.log(text?.trim());
  }

  // ✅ Click on the "PIM" tab

  for (let i = 0; i < count; i++) 
{
    const text = await linkTabs.nth(i).textContent();
    if (text?.trim() === "PIM") 
    {
      await linkTabs.nth(i).click();
      break;
    }
  }

  // Optional: close page
  // await page.close();
});

test('another with for each loop', async({ page })=>
{
    await page.goto("https://demoblaze.com/");


   await  page.waitForSelector("//div[@id='tbodyid']//div//h4/a");

   // if you wanna use for each loop then you should use $$ sign to locate an element

    const products = await page.$$("//div[@id='tbodyid']//div//h4/a");

   for(const product of products)
   {

    const textProductName= await product.textContent();
    console.log(textProductName);

   }



})