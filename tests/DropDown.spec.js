import { test,expect } from '@playwright/test';

test('Drop Down', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Select the drop-down element using its id and select the option by its label
    // with label   
    await page.locator("//select[@id='country']").selectOption({ label: "India" });
     // with text
    //await page.locator("//select[@id='country']").selectOption('USA'); // Select by value
    // with value
    //await page.locator("//select[@id='country']").selectOption({ value: "India" }); // Select by value
    // with index 
    //await page.locator("//select[@id='country']").selectOption({ index: 1 }); // Select by index
    // Verify the selected option

    // number of options in the drop down
    // Number of options in the drop-down
    const optionsCount = await page.locator("//select[@id='country']/option").count(); // Get the count of options
    await expect(optionsCount).toBe(10); // Verify the number of options in the dropdown
    console.log("Number of options in the dropdown:", optionsCount); // Log the number of options

    const arryOptions= await page.$$("//select[@id='country']/option");
    console.log("Array of options:", arryOptions.length); // Log the array of options

    for(let i=0; i<arryOptions.length; i++)
    {
        const optionText = await arryOptions[i].innerText(); // Get the text of each option
        console.log("Option text:", optionText); // Log the text of each option
    }
  
    


    const selectedOption = await page.locator("//select[@id='country']").inputValue();
    console.log("Selected option:", selectedOption); // Log the selected option
    await expect(selectedOption).toBe("india"); // Verify the selected option is "India"
    // i wanna validate it in a different way
   // const selectedOptionText = await page.locator("//select[@id='country'] option:checked").innerText();
    // Wait for 2 seconds to observe the selection


   const contain= await page.locator("//select[@id='country']").textContent();
   await expect(contain.includes("India")).toBeTruthy(); 
   // Verify the selected option is "India"


   const arryOptions1= await page.$$("//select[@id='country']/option");
   let status = false;

   for(const option of arryOptions1)
   {
     //console.log(option.textContent());
     let value= await option.textContent();
     if(value.includes("India"))
     {
        status=true; // if the value is found in the array, set status to true
        break; // exit the loop
     }
   }


    await  expect(status).toBeTruthy(); // Verify the status is true


    await page.waitForTimeout(2000);



  const arryOption= await page.$$("//select[@id='country']/option");
   

   for(const option of arryOption)
   {
     //console.log(option.textContent());
     let value= await option.textContent();
     if(value.includes("Australia"))
     {
       await page.selectOption("//select[@id='country']", value); // Select the option by its text)
        break; // exit the loop
     }
   }

   await page.waitForTimeout(2000);


});