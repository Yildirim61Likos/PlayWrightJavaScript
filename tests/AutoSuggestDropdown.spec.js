import{test,expect} from '@playwright/test';


test('Auto Suggest Dropdown', async({ page })=>{


    await page.goto("https://www.redbus.in/");


    await page.locator("#src").fill("Delhi");
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text[1]");

   const fromCityOptions= await page.$$("//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text[1]");

    for(let fromCityOption of fromCityOptions)
    {

        const text= await fromCityOption.innerText(); // Get the text of each option

        await console.log("Option text:", text); // Log the text of each option
        if(text.includes("Badarpur") || text.includes("Delhi Cantt"))
        {
            await fromCityOption.click(); // Click on the option to select it
            console.log("Selected option:", text); // Log the selected option
            break; // Exit the loop after selecting the option
        }
       

    }

await page.waitForTimeout(5000); // Wait for 2 seconds to observe the selection


})