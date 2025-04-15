import{test,expect} from '@playwright/test';

test('multi select dropdown', async({ page })=>

{
    
       await  page.goto("https://testautomationpractice.blogspot.com/");
    
        // Select multiple options from the dropdown
        await page.locator("#colors").selectOption(["Blue", "Red", "Yellow"]);


        const option = await page.locator("#colors option"); // Select by value
        await expect(option).toHaveCount(7); // Verify the number of selected options

        console.log("Number of selected options:", option.count()); // Log the number of selected options
        console.log("Selected options:", await option.allTextContents()); // Log the selected options
        
        const option2 = await page.$$("#colors option"); 
        console.log("Number of selected options:", option2.length); // Log the number of selected options

        await expect(option2.length).toBe(7); // Verify the number of selected options

        const option3 = await page.locator("#colors").textContent();
        await expect(option3.includes("Blue")).toBeTruthy(); // Verify the selected option is "Blue"
        await expect(option3.includes("Red")).toBeTruthy(); // Verify the selected option is "Red"

        await expect(option3.includes("Black")).toBeFalsy; // Verify the selected option is "Yellow"

        // Verify the selected options
        //const selectedOptions = await page.locator("#colors").allSelectedOptions();
        //const selectedValues = await Promise.all(selectedOptions.map(option => option.getAttribute('value')));
        
        //expect(selectedValues).toEqual(["option1", "option2", "option3"]);


       await page.waitForTimeout(5000); // Wait for 2 seconds to observe the selection



})