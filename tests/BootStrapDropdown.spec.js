import{test,expect} from '@playwright/test';


test('BootStrap Dropdown', async({ page })=>{


    await page.goto("https://jquery-az.com/boots/demo.php?ex=63.0_2");

    await page.locator("//button[@data-toggle='dropdown']").click(); // Click on the dropdown button

   const options= await page.locator("//button[@data-toggle='dropdown']//following-sibling::ul//li//input");
   //total numnber of options in the dropdown
   await expect(options).toHaveCount(11); // Verify the number of options in the dropdown

   //total numnber of options in the dropdown
   const options1= await page.$$("//button[@data-toggle='dropdown']//following-sibling::ul//li//input");

   await expect(options1.length).toBe(11); // Verify the number of options in the dropdown
   console.log("Number of options in the dropdown:", options1.length); // Log the number of options


   //select options from from dropdown using loop
   const options2= await page.$$("ul>li label");

   for(let options of options2)
   {
        const optionText = await options.innerText(); // Get the text of each option
        console.log("Option text:", optionText); // Log the text of each option
        if(optionText.includes("Java") || optionText.includes("Python"))
        {
            await options.click(); // Click on the option to select it
            console.log("Selected option:", optionText); // Log the selected option
        }
       

   }


   //deselect the options from the dropdown using loop
   const options3= await page.$$("ul>li label");

   for(let options of options3)
   {
        const optionText = await options.innerText(); // Get the text of each option
        console.log("Option text:", optionText); // Log the text of each option
        if(optionText.includes("HTML") || optionText.includes("CSS"))
        {
            await options.click(); // Click on the option to select it
            console.log("Selected option:", optionText); // Log the selected option
        }
       

   }




//lets validate if java and python are selected or not
 //  const selectedOption = await page.locator("//button[@data-toggle='dropdown']").inputValue();
  // console.log("Selected option:", selectedOption); // Log the selected option
//   await expect(selectedOption).toBe("Java, Python"); // Verify the selected option is "Java, Python"

 ///  const contain= await page.locator("//button[@data-toggle='dropdown']").textContent();
 //  await expect(contain.includes("Java")).toBeTruthy(); 
  // await expect(contain.includes("Python")).toBeTruthy();


  await  page.waitForTimeout(2000);


})