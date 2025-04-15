import{test,expect} from '@playwright/test';


test('Handle Date Pickers', async({ page })=>{

   await  page.goto("https://testautomationpractice.blogspot.com/");

   //page.locator("//input[@id='datepicker']").fill("04/08/2025");;

   const year = "2025";
   const month = "May";
   const day = "8";

    await page.locator("//input[@id='datepicker']").click(); // click on the date picker input field
    

    while(true)
    {
      const currentMonth = await page.locator(".ui-datepicker-month").textContent(); // click on the year
      const currentYear = await page.locator(".ui-datepicker-year").textContent(); // click on the month

      if(currentMonth == month && currentYear == year)
      {
        break; // exit the loop if the month and year are correct
      }
      await page.locator("[title='Next']").click(); // click on the next button to go to the next month
      

    }

     const dates=await page.$$("//table[@class='ui-datepicker-calendar']//tr//td/a"); 
     // this is returning arary !

     for(let i=0; i<dates.length; i++)
     {
        const date= await dates[i].textContent(); // get the text of the date
        if(date == day)
        {
            await dates[i].click(); // click on the date
            break; // exit the loop if the date is correct
        }
     }



    await page.waitForTimeout(3000); // wait for 2 seconds to see the alert





})