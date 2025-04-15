import { test, expect } from '@playwright/test';

test('Handle Checkboxes', async ({ page }) => 
{

    // Navigate to the page with checkboxes
    await page.goto('https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php');

    // Check a checkbox
    const checkbox = page.locator("//input[@id='studentid']");
    await checkbox.check();
    await expect(checkbox).toBeChecked(); // Verify the checkbox is checked

    // Uncheck the checkbox
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked(); // Verify the checkbox is unchecked


    // multiple checkboxes

    const checkboxes = ["//input[@id='studentid']","//input[@id='passport']","//input[@id='drivinglicense']"];
    //const arraySixe= checkboxes.length(); // Get the number of checkboxes
    //console.log(arraySixe); // Print the number of checkboxes

    for(const checkbox of checkboxes) 
    {
        const checkBoLocator=page.locator(checkbox);
        await checkBoLocator.check(); // Check the checkbox
        await expect(checkBoLocator).toBeChecked(); // Verify the checkbox is checke

    }


    // Uncheck all checkboxes
    for(const checkbox of checkboxes) 
    {
       if(await page.locator(checkbox).isChecked()) // Check if the checkbox is checked
       {
            const checkBoLocator=page.locator(checkbox);
            await checkBoLocator.uncheck(); // Uncheck the checkbox
            await expect(checkBoLocator).not.toBeChecked(); // Verify the checkbox is unchecked
       }
    }


    await page.waitForTimeout(2000); // Wait for 2 seconds to observe the selection

});