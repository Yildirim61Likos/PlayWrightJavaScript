import{test,expect} from '@playwright/test';


test('Handle Radio Buttons', async({ page })=>    
{

    page.goto("https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php");

    // Radio buttons are used to select one option from a set of options.
    await page.locator("//input[@id='current']").check(); 

    await expect (page.locator("//input[@id='current']")).toBeChecked(); // Verify the radio button is checked
    await expect (page.locator("//input[@id='current']").isChecked()).toBeTruthy(); // Verify the radio button is checked using isChecked()
    
    
    await expect (page.locator("//input[@id='pension']")).not.toBeChecked(); 
    // // Verify the radio button is not checked



    await page.waitForTimeout(2000); // Wait for 2 seconds to observe the selection




})