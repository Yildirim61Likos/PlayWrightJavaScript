import{test,expect} from '@playwright/test';


test('Alert new for promt', async ({page})=>{

 await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.waitForTimeout(3000); // wait for 3 seconds to see the alert

    await page.on('dialog', async dialog => 
    {
        console.log(dialog.message());
        await dialog.accept("Hello"); // accept the alert and enter the text "Hello" in the input box
    })


    await page.locator("//button[@onclick='jsPrompt()']").click(); // click on the button to open the alert

    await page.waitForTimeout(3000);

})