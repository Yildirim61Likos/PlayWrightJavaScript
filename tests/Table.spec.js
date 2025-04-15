import{test,expect} from '@playwright/test';


test('Table', async({ page })=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

   const table= await page.locator("#productTable");

   // totale number rows and columns in the table
   const columns= table.locator("thead tr th"); // then print the totlae number of columns in the table
   await console.log(await columns.count()); // print the total number of columns in the table
   await expect(await columns.count()).toBe(4);

   const rows=await table.locator("tbody tr"); // click on the first cell of the first row
   await console.log(await rows.count()); // print the total number of rows in the table
   await expect(await rows.count()).toBe(5)

   // select the check box for product4
    const matchedRow=rows.filter
    ({
          has: page.locator("td"), // select the row 
          hasText: "Wireless Earbuds" // select the row with the text "Product4"
   })

    await matchedRow.locator("input").check(); // check the checkbox in the first cell of the row


  // select multiple products

  await selectProducts("Smartwatch", rows , page); // select the checkbox for the product "Apple Watch"
  await selectProducts("Smartphone", rows , page);


  // print all the details of all the products in the table


  for(let i=0; i<await rows.count(); i++)
  {

    const row= await rows.nth(i); // get the row
    const cells= await row.locator("td"); // get the cells in the row

    for(let i=0; i<await cells.count()-1; i++)
    {
        const cell= await cells.nth(i); // get the cell
        const cellText= await cell.textContent(); // get the text of the cell
        console.log(cellText); // print the text of the cell
    }
  

  }

  for(let i=0; i<await rows.count(); i++)
  {
      const row= await rows.nth(i); // get the row
      const cells= await row.locator("td"); // get the cells in the row
      const cellText= await cells.allTextContents(); // get the text of all the cells in the row
      console.log(cellText); // print the text of all the cells in the row
  }


  // read data from all the pages in the table

  // find out howmany page is there in the table
  const totalPages= await page.locator("#pagination li a "); // get the pages in the table

  console.log(await totalPages.count()); // print the total number of pages in the table

  for(let p=0; p<await totalPages.count(); p++)
  {
     if(p>0)
    {
      await totalPages.nth(p).click(); // click on the page
    }
    for(let i=0; i<await rows.count(); i++)
        {
      
          const row= await rows.nth(i); // get the row
          const cells= await row.locator("td"); // get the cells in the row
      
          for(let i=0; i<await cells.count()-1; i++)
          {
              const cell= await cells.nth(i); // get the cell
              const cellText= await cell.textContent(); // get the text of the cell
              console.log(cellText); // print the text of the cell
          }
        
      
        }
       await  page.waitForTimeout(2000); // wait for 2 seconds to see the page

  }




  await page.waitForTimeout(2000); // wait for 2 seconds to see the alert

})



async function selectProducts(productName, rows , page)
  {
      const matchedRow=rows.filter
      ({
            has: page.locator("td"), // select the row 
            hasText: productName // select the row with the text "Product4"
     })

      await matchedRow.locator("input").check(); // check the checkbox in the first cell of the row
  }
