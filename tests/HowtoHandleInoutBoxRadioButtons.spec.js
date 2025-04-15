import{test, expect} from '@playwright/test';

test('Actions', async({page})=>{


    //action: click, fill, select, check, uncheck, hover, dragAndDrop, type, press, selectOption, selectText
    // click: Clicks on an element
    // fill: Fills an input field with a specified value
    // select: Selects an option from a dropdown or select element
    // check: Checks a checkbox or radio button
    // uncheck: Unchecks a checkbox or radio button
    // hover: Moves the mouse over an element
    // dragAndDrop: Drags an element and drops it on another element
    // type: Types text into an input field


    await page.goto("https://demo.nopcommerce.com/register");

    // fill the first name field
    const fisrtName = await page.locator("//input[@id='FirstName']");
    await expect(fisrtName).toBeVisible(); // Verify the field is visible
    await expect(fisrtName).toBeEnabled(); // Verify the field is enabled
    await expect(fisrtName).toBeEmpty(); // Verify the field is empty
    await expect(fisrtName).toBeEditable(); // Verify the field is editable
    await page.locator("//input[@id='FirstName']").fill("John");



    // fill the last name field
    await page.locator("//input[@id='LastName']").fill("Likos");

    await page.waitForTimeout(2000); 




    

})