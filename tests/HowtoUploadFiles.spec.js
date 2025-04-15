import{test,expect} from '@playwright/test';
import path from 'path';

test('How to Upload Single Files', async({ page })=>
{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const pdfFilePath = path.resolve(__dirname, "../files/Yildirim Likos's Resume.pdf");
    await page.locator("//input[@id='singleFileInput']").setInputFiles(pdfFilePath); // upload the file
    await page.waitForTimeout(3000); // wait for 3 seconds to see the uploaded file

})



test.only('How to Upload Multiple Files', async({ page })=>{

    
    await page.goto("https://testautomationpractice.blogspot.com/");

    const pdfFilePath = path.resolve(__dirname, "../files/Yildirim Likos's Resume.pdf");
    const pdfFilePath2 = path.resolve(__dirname, '../files/Playwright Installation.txt');
    const pdfFilePath3 = path.resolve(__dirname, '../files/swaty.png');

    //upload multiple files
    await page.locator("//input[@id='multipleFilesInput']").setInputFiles([pdfFilePath, pdfFilePath2, pdfFilePath3]); // upload the file
    await page.waitForTimeout(3000); // wait for 3 seconds to see the uploaded file

    await page.locator("//input[@id='multipleFilesInput']").setInputFiles([]);
    await page.click("//button[normalize-space()='Upload Multiple Files']"); // click on the submit button
    await expect(page.locator("//p[@id='multipleFilesStatus']")).toHaveText("No files selected."); // check the text of the alert

    await page.waitForTimeout(3000); // wait for 3 seconds to see the uploaded file
})