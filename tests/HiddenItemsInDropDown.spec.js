import{test,expect} from '@playwright/test';

test('hidden items in dropdown', async({page})=>
{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("//input[@placeholder='Username']").fill("Admin");
    await  page.locator("//input[@placeholder='Password']").fill("admin123");

    await page.click("//button[@type='submit']");

    await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click();


    await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div/div[2]/i").click();

    await page.waitForTimeout(3000);

    const options= await page.$$("//div[@role='listbox']//span");

    for(let option of options)
    {
       const text =  await option.textContent();

       //console.log("Option text:", text); // Log the text of each option
       if(text.includes("QA Engineer"))
        {
               await option.click(); // Click on the option to select it
               console.log("Selected option:", text); // Log the selected option
               break; // Exit the loop after selecting the option
       }
    
    }


    await page.waitForTimeout(3000);




})